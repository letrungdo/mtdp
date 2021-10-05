import { Provider } from "react-redux";
import { initializeStore } from "../redux/store";
import "../styles/antd.less";
import "../styles/styles.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={initializeStore()}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
