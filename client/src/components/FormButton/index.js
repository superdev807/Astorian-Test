import React from "react";
import styles from "./styles.module.scss";

export default function FormButton({
  buttonIcon,
  buttonText,
  handleSubmit,
  disabled,
}) {
  return (
    <button
      className={styles.formButton}
      onClick={handleSubmit}
      disabled={disabled}
    >
      <img src={buttonIcon} className={styles.formIcon} alt={"astorian"} />{" "}
      {buttonText}
    </button>
  );
}
