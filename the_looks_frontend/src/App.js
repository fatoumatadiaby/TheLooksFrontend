import React from "react";
import { connect } from "react-redux";
import ProductsContainer from "./containers/ProductsContainer";
import LooksContainer from "./containers/LooksContainer";
import NavBar from "./NavBar";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ProductsContainer/>
        <LooksContainer />
      </div>
    );
  }
}

export default App;
