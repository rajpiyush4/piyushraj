import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Provider from './Provider'
// import { ApolloProvider } from '@apollo/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter> 
    {/* <ApolloProvider client={client}> */}
      <App />
    {/* </ApolloProvider> */}
  </BrowserRouter >
  // </React.StrictMode>
)
