import React from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import FormButton from "components/FormButton";
import scissorIcon from "assets/icons/scissors.svg";
import styles from "./styles.module.scss";

export default function UrlShortenerPage() {
  const handleSubmit = () => {};
  return (
    <FormContainer>
      <FormHeader headerTitle={"Free URL Shortener"} />
      <FormInput
        labelText={"URL To Shorten"}
        placeHolder={"https://example.com"}
      />
      <div className={styles.aliasContainer}>
        <FormInput
          labelText={"Alias"}
          placeHolder={"Enter an alias"}
          className={styles.aliasInput}
        />
        <FormButton
          buttonText={"Shorten!"}
          buttonIcon={scissorIcon}
          handleSubmit={handleSubmit}
        />
      </div>
    </FormContainer>
  );
}
