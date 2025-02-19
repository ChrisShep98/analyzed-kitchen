"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

export const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
