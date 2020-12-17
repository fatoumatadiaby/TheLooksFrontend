import React from "react";
import {StylePage, Li} from './Static'
//  import {Route, Link} from 'react-router-dom'

const Products = (props) => {
    // debugger;
  return (
      <div>
        <StylePage>
          {props.look && props.look.products.map((product) => (
            <Li key={product.id}>
              {" "}
             Product Name: {product.product_name} <br></br>   
              Store: {product.store} <br></br> Website Link: {product.url}
            </Li>
          ))}
        </StylePage>
      </div>
    );
};

export default Products;

