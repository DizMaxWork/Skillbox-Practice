import React from "react";
import styles from "./Layout.module.css";

export interface ILayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
