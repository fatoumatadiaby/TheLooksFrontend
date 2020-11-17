import React from "react";
import {connect} from 'react-redux';
import ProductsContainer from './containers/ProductsContainer'
import LooksContainer from "./containers/LooksContainer";


class App extends React.Component {
  
  
  render() {
    return (
      <div className="App">
        <ProductsContainer/>
        <LooksContainer/>
      </div>
  );
}
}


export default App;
