import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/card";
import Cards from "../components/cards";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className="xd">
      <Cards data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://futuramaapi.herokuapp.com/api/v2/characters"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
