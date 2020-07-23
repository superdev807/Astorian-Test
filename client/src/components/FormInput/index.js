import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export default function FormInput({
  labelText = "",
  placeHolder = "",
  inputId = "input",
  handleChange,
  className,
}) {
  return (
    <div className={cx(styles.formInput, className)}>
      {labelText && <label>{labelText}</label>}
      <input
        type="text"
        placeholder={placeHolder}
        onChange={handleChange}
        id={inputId}
      />
    </div>
  );
}
