import type { NextPage } from "next";
import React from "react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User Management App</title>
        <meta name="description" content="User Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>this is my app</main>
    </div>
  );
};

export default Home;
