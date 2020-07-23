import React, { useState } from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import FormButton from "components/FormButton";
import ErrorList from "components/ErrorList";
import { validateString } from "utils/validate";
import scissorIcon from "assets/icons/scissors.svg";
import styles from "./styles.module.scss";

export default function UrlShortenerPage() {
  const [urlMap, setUrlMap] = useState({ longUrl: "", alias: "" });
  const [errorList, setErrorList] = useState([]);

  const handleChange = (e) => {
    if (e.persist) e.persist();
    setUrlMap((prevUrl) => ({ ...prevUrl, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = [];
    const { longUrl, alias } = urlMap;
    const longUrlError = validateString(longUrl, "url");
    const aliasError = validateString(alias, "alias");
    if (longUrlError) errors.push(longUrlError);
    if (aliasError) errors.push(aliasError);
    setErrorList(errors);
  };

  return (
    <FormContainer className={errorList.length ? styles.errorContainer : ""}>
      <FormHeader headerTitle={"Free URL Shortener"} />
      <FormInput
        labelText={"URL To Shorten"}
        placeHolder={"https://example.com"}
        handleChange={handleChange}
        inputId={"longUrl"}
      />
      <div className={styles.aliasContainer}>
        <FormInput
          labelText={"Alias"}
          placeHolder={"Enter an alias"}
          className={styles.aliasInput}
          handleChange={handleChange}
          inputId={"alias"}
        />
        <FormButton
          buttonText={"Shorten!"}
          buttonIcon={scissorIcon}
          handleSubmit={handleSubmit}
        />
      </div>
      <ErrorList errors={errorList} />
    </FormContainer>
  );
}
