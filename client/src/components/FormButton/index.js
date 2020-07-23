import React from "react";
import styles from "./styles.module.scss";

export default function FormButton({ buttonIcon, buttonText, handleSubmit }) {
  return (
    <button className={styles.formButton} onClick={handleSubmit}>
      <img src={buttonIcon} className={styles.formIcon} /> {buttonText}
    </button>
  );
}
