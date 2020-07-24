import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export default function FormInput({
  labelText = "",
  placeHolder = "",
  inputId = "input",
  handleChange,
  disabled = false,
  defaultValue = "",
  className,
}) {
  return (
    <div className={cx(styles.formInput, className)}>
      {labelText && <label>{labelText}</label>}
      <input
        id={inputId}
        type="text"
        placeholder={placeHolder}
        onChange={handleChange}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </div>
  );
}
