import React from "react";
import styles from "../styles/Card.module.css";

function Card({ char }) {
  return (
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <div className={styles["img-wrapper"]}>
            <img
              className={styles.picture}
              src={char.PicUrl}
              alt="character picture"
            />
          </div>
          <h1 className={styles.name}>{char.Name}</h1>
        </div>
        <div className={styles["flip-card-back"]}>
          <h1>{char.Name}</h1>
          <p>{char.Species}</p>
          <p>{char.Profession !== "Unknown" ? char.Profession : ""}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
