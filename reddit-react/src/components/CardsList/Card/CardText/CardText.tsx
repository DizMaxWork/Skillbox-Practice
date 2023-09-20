import React from "react";
import styles from "./CardText.module.css";

export default function CardText() {
  return (
    <div>
      <h2 className={styles.title}>
        <a href="#" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности...
        </a>
      </h2>
    </div>
  );
}
