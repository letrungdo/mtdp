import { DefaultSeo } from "next-seo";
import { Provider } from "react-redux";
import { initializeStore } from "../redux/store";
import SEO from "../next-seo.config";
import "../styles/antd.less";
import "../styles/styles.scss";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={initializeStore()}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
