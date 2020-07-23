import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

export default function FormContainer({ children, className }) {
  return <div className={cx(styles.formContainer, className)}>{children}</div>;
}
