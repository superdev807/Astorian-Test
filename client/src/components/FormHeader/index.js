import React from "react";
import styles from "./styles.module.scss";

export default function FormHeader({ headerTitle }) {
  return <div className={styles.headerTitle}>{headerTitle}</div>;
}
