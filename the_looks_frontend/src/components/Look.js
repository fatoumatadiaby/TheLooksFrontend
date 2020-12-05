import React from "react";
// import {Redirect} from 'react-router-dom'
import ProductsContainer from "../containers/ProductsContainer";

const Look = (props) => {
// debugger;
    let look = props.looks.looks[props.match.params.id - 1];
    console.log(look)
    return (
      <div>
        <h2>
          {look ? look.title : null} -{" "}
          {look ? look.note : null} -{" "}
          {look ? look.date : null}
        </h2>
        <ProductsContainer look={look}/>
        
      </div>
    );
}
export default Look 