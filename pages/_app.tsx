import React from "react";
import GraphQlProvider from "@components/providers/GraphQlProvider";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQlProvider>
      <Component {...pageProps} />
    </GraphQlProvider>
  );
}

export default MyApp;
