import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";


const client = new ApolloClient({
  uri: 'http://localhost:4000', // URL of the Apollo Server
  cache: new InMemoryCache()
});

function Provider({ children }) {
  return (
    <ApolloProvider client={client}>
      <>{children}</>
    </ApolloProvider>
  )
}

Provider.propTypes = {
  children: React.ReactNode
}

export default Provider;