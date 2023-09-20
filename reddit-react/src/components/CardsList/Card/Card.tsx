import React from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardHeader/CardHeader";
import CardText from "./CardText/CardText";
import CardPreview from "./CardPreview/CardPreview";
import CardMenu from "./CardMenu/CardMenu";
import CardControls from "./CardControls/CardControls";

export default function Card() {
  return (
    <li className={styles.card}>
      <CardHeader />
      <CardText />
      <CardPreview />
      <CardMenu />
      <CardControls />
    </li>
  );
}
