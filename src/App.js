import React from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
}
