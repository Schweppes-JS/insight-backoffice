import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={new ApolloClient({ uri: "https://rickandmortyapi.com/graphql", cache: new InMemoryCache() })}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
