import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { detectScreen } from "redux/actions";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import debounce from "lodash/debounce";

import Header from "components/Header";
import UrlShortenerPage from "containers/UrlShortenerPage";
import SuccessPage from "containers/SuccessPage";

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
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UrlShortenerPage} />
            <Route exact path="/success" component={SuccessPage} />
            <Route path="" component={() => <div>Not Found</div>} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
