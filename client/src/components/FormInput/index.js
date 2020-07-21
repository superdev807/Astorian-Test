import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

export default function FormInput({ headerTitle }) {
  return (
    <div className={cx(styles.defaultFont, styles.headerTitle)}>
      {headerTitle}
    </div>
  );
}
