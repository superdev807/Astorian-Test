import React, { useEffect, useMemo } from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import { useHistory } from "react-router-dom";
import { getCookie } from "utils/cookie";
import styles from "./styles.module.scss";
import isEmpty from "lodash/isEmpty";
import FormLabelBox from "components/FormLabelBox";

export default function SuccessPage() {
  const cookieUrl = getCookie("urlMap");
  const longUrl = useMemo(() => {
    return cookieUrl ? JSON.parse(cookieUrl)["long_url"] : "";
  }, [cookieUrl]);
  const alias = useMemo(() => {
    return cookieUrl ? JSON.parse(cookieUrl)["alias"] : "";
  }, [cookieUrl]);

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
        disabled={true}
        defaultValue={alias}
      />
      <FormLabelBox labelTitle={"Long URL: "} labelText={longUrl} />
    </FormContainer>
  );
}
