import React from "react";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";
import styles from "./styles.module.scss";

export default function SuccessPage() {
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
