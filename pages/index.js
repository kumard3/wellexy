import Head from "next/head";
import Header from "../components/layouts/Header";
import Body from "../components/layouts/Body";
import Offers from "../components/layouts/Offers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Order Medicines Online , Patna - Wellexy</title>
        <meta
          name="description"
          content="Only purchase medicines online from credible sources. The best thing you can do to avoid getting counterfeit medicine is to ensure the online pharmacy you ..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Offers/>
      <Body/>
    </div>
  );
}
