import React from "react";
import styles from "./CardPreview.module.css";
import preview from "./../cardImg/preview.png";

export default function CardPreview() {
  return (
    <div className={styles.preview}>
      <img src={preview} alt="Preview" className={styles.previewImg} />
    </div>
  );
}
