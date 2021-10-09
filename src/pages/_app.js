import { DefaultSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { pageview } from "../lib/gtag";
import SEO from "../next-seo.config";
import { initializeStore } from "../redux/store";
import "../styles/antd.less";
import "../styles/styles.scss";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={initializeStore()}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
