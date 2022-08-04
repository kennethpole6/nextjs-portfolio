import { NextSeo } from "next-seo";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextSeo
        title="Kenneth Pole"
        description="Kenneth Pole Portfolio"
        canonical="https://kennethpole6.vercel.app/"
        twitter={{
          handle: "kenneth pole",
          site: "@kp110101",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
