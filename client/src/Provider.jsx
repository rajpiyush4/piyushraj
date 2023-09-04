import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


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

export default Provider