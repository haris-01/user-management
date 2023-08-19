import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

type GraphQlProviderPropTypeProps = { children: React.ReactNode };

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

const GraphQlProvider = ({ children }: GraphQlProviderPropTypeProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default GraphQlProvider;
