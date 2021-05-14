import React from "react";
import Card from "./card";
import styles from "../styles/Cards.module.css";

function Cards({ data }) {
  return (
    <div className={styles.cards}>
      {data.map((char) => (
        <Card char={char} />
      ))}
    </div>
  );
}

export default Cards;
