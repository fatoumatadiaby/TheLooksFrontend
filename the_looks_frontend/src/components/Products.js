import React from "react";


const Products = (props) => {

    return (
        <div>
          {props.products.products.map(product => 
          <li key={product.id}> {product.attributes.category} - {product.attributes.product_name}</li>
             )}
           
        </div>
    )


}

export default Products;

// const { products } = props.products;