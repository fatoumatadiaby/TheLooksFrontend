import React from "react";


const Products = (props) => {
   
    return (
        <div>
           {props.products.map(product => 
            <li> {product.attributes.category} - {product.attributes.product_name}</li>
            )}
        </div>
    )


}

export default Products;