import React, { useEffect } from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import { useHistory } from "react-router-dom";
import { getCookie } from "utils/cookie";
import styles from "./styles.module.scss";
import isEmpty from "lodash/isEmpty";

export default function SuccessPage() {
  const cookieUrl = getCookie("urlMap");
  const history = useHistory();

  useEffect(() => {
    if (!cookieUrl || isEmpty(cookieUrl)) {
      history.push("/");
    }
  }, [cookieUrl, history]);

  return (
    <FormContainer>
      <FormHeader headerTitle={"Success!"} />
      <FormInput
        placeHolder={"https://example.com"}
        className={styles.successFormInput}
      />
    </FormContainer>
  );
}
