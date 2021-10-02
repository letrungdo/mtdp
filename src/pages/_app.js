import { Provider } from "react-redux";
// import Loading from "../components/other/Loading";
import withReduxStore from "../common/withReduxStore";
import "../styles/antd.less";
import "../styles/styles.scss";

const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default withReduxStore(App);
