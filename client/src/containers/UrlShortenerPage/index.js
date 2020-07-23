import React from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import styles from "./styles.module.scss";

export default function UrlShortenerPage() {
  return (
    <FormContainer>
      <FormHeader headerTitle={"Free URL Shortener"} />
      <FormInput
        labelText={"Url To Shorten"}
        placeHolder={"https://example.com"}
      />
      <FormInput
        labelText={"Alias"}
        placeHolder={"Enter an alias"}
        className={styles.aliasInput}
      />
    </FormContainer>
  );
}
