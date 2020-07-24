import React from "react";
import styles from "./styles.module.scss";

export default function FormLabelBox({ labelTitle = "", labelText = "" }) {
  return (
    <div className={styles.formLabelBox}>
      <label className={styles.labelTitle}>{labelTitle}</label>
      <label className={styles.labelText}>{labelText}</label>
    </div>
  );
}
