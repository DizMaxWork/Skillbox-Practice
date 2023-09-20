import React from "react";
import styles from "./Header.module.css";
import SearchBlock from "./SearchBlock/SearchBlock";
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";
import SortBlock from "./SortBlock/SortBlock";

export default function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
