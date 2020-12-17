import React from "react";
import LooksContainer from "./containers/LooksContainer";
import NavBar from "./NavBar";
import './App.css';
import { GlobalStyle } from "./components/FormComponents";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle/>
        <NavBar/>
        <LooksContainer />
      </div>
    );
  }
}

export default App;
