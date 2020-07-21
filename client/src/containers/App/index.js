import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { detectScreen } from "redux/actions";
import debounce from "lodash/debounce";

import Header from "components/Header";
import styles from "./styles.module.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detectScreen());
    const setDeviceType = debounce(() => dispatch(detectScreen()), 250);
    const handleResize = () => setDeviceType();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.content}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#ff9939",
          }}
        >
          asdf
        </div>
        <Header />
      </div>
    </div>
  );
}

export default App;
