import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import FormButton from "components/FormButton";
import ErrorList from "components/ErrorList";
import { storeUrlMatch } from "redux/actions";
import {
  makeSelectErrors,
  makeSelectAPIState,
} from "redux/selectors/urlSelectors";
import { getCookie } from "utils/cookie";
import { API_PENDING } from "../../redux/api/request";
import isEmpty from "lodash/isEmpty";
import styles from "./styles.module.scss";
import scissorIcon from "assets/icons/scissors.svg";

export default function UrlShortenerPage() {
  const [urlMap, setUrlMap] = useState({ longUrl: "", alias: "" });
  const errorList = useSelector(makeSelectErrors);
  const apiState = useSelector(makeSelectAPIState);
  const history = useHistory();
  const dispath = useDispatch();
  const cookieUrl = getCookie("urlMap");

  useEffect(() => {
    if (cookieUrl && !isEmpty(cookieUrl)) {
      history.push("/success");
    }
  }, [cookieUrl, history]);

  const handleChange = (e) => {
    if (e.persist) e.persist();
    setUrlMap((prevUrl) => ({ ...prevUrl, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(storeUrlMatch({ data: urlMap }));
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
          disabled={apiState === API_PENDING}
        />
      </div>
      <ErrorList errors={errorList} />
    </FormContainer>
  );
}
