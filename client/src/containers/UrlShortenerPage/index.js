import React from "react";
import { useDispatch } from "react-redux";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";
import FormInput from "components/FormInput";

export default function UrlShortenerPage() {
  return (
    <FormContainer>
      <FormHeader headerTitle={"Free URL Shortener"} />
      <FormInput labelText={"Url To Shorten"} />
    </FormContainer>
  );
}
