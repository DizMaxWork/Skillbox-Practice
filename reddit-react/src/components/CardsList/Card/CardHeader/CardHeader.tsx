import React from "react";
import styles from "./CardHeader.module.css";
import avatar from "./../cardImg/avatar.png";

export default function CardHeader() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>4 часа назад</span>
      </div>
    </div>
  );
}
