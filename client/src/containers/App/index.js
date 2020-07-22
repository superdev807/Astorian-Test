import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { detectScreen } from "redux/actions";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import debounce from "lodash/debounce";

import Header from "components/Header";
import UrlShortenerPage from "containers/UrlShortenerPage";
import styles from "./styles.module.scss";

const history = createBrowserHistory();

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
      <Header />
      <div className={styles.content}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={UrlShortenerPage} />
            <Route path="" component={() => <div>Page Not Found</div>} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
