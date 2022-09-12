import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DisabledButton from "./components/states/disabled-button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DisabledButton />
    </>
  );
};

export default Home;
