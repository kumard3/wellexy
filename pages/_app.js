import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import "../styles/globals.css";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
