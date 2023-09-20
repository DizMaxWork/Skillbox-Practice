import React from "react";
import logo from "./logo.svg";
import "./main.global.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import CardsList from "./components/CardsList/CardsList";

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export default App;