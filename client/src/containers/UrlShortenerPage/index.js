import React from "react";
import { useDispatch } from "react-redux";
import FormContainer from "components/FormContainer";
import FormHeader from "components/FormHeader";

export default function UrlShortenerPage() {
  return (
    <FormContainer>
      <FormHeader headerTitle={"Free URL Shortener"} />
    </FormContainer>
  );
}
