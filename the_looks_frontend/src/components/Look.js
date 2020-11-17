import React from "react";
import {Redirect} from 'react-router-dom'
// import ProductsContainer from "../containers/ProductsContainer";

const Look = (props) => {

    let look = props.looks.looks[props.match.params.id - 1];
    return (
      <div>
        <h2>
          {look ? look.attributes.title : null} -{" "}
          {look ? look.attributes.note : null} -{" "}
          {look ? look.attributes.date : null}
        </h2>
        {/* <ProductsContainer look={look}/> */}
      </div>
    );
}
export default Look 