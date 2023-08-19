import React from "react";
import Head from "next/head";
import HomePage from "@components/HomePage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>User Management App</title>
        <meta name="description" content="User Management App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
