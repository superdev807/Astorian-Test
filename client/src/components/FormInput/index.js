import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export default function FormInput({ labelText, className }) {
  return (
    <div className={cx(className, styles.formInput)}>
      {labelText && <label>{labelText}</label>}
      <input type="text" />
    </div>
  );
}
