import React from "react";
import { useSelector } from "react-redux";
import { makeSelectIsDesktop } from "redux/selectors/urlSelectors";
import styles from "./styles.module.scss";
import logoDesktop from "assets/icons/logo_desktop.svg";
import logoMobile from "assets/icons/logo_mobile.svg";

const Header = () => {
  const isDesktop = useSelector(makeSelectIsDesktop);

  return (
    <div className={styles.headerWrapper}>
      {isDesktop ? (
        <img src={logoDesktop} alt="logo-desktop" />
      ) : (
        <img src={logoMobile} alt="logo-mobile" />
      )}
    </div>
  );
};

export default Header;
