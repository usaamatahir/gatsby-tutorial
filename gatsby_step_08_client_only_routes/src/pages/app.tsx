import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import ClientOne from "../components/ClientOne";
import ClientTwo from "../components/ClientTwo";

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <ClientOne path="/client1" />
        <ClientTwo path="/client2" />
      </Router>
    </Layout>
  );
};

export default App;
