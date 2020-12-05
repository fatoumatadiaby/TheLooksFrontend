import React from "react";
//  import {Route, Link} from 'react-router-dom'

const Products = (props) => {
    return (
    <div>
      { props.products.products.map((product) => ( 
         <li key={product.id}>
          {" "}
         {product.category} - {product.product_name} 
         </li>
      ))}
      
    </div>
  );
};

export default Products;

// -{product.price} - {product.store} - {product.url}