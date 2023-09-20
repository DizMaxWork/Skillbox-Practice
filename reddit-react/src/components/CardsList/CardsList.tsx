import React from "react";
import styles from "./CardsList.module.css";
import Card from "./Card/Card";

export default function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
