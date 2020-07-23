import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
let cx = classNames.bind(styles);

export default function ErrorList({ errors }) {
  return errors.length ? (
    <div className={styles.errorList}>
      <p
        className={cx(
          styles.errorTitle,
          styles.normalTextBox,
          styles.defaultText
        )}
      >
        Errors
      </p>
      {errors.map((error, i) => (
        <p
          key={`error-${i}`}
          className={cx(
            styles.errorText,
            styles.normalTextBox,
            styles.defaultText
          )}
        >
          {error}
        </p>
      ))}
    </div>
  ) : null;
}
