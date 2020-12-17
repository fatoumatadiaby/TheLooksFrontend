import React from "react";

import Products from "../components/Products";
import ProductForms from "../components/ProductForms";

class ProductsContainer extends React.Component {
 

  render() {
    return (
      <div>
        <Products look={this.props.look && this.props.look}/>
        <ProductForms look={this.props.look && this.props.look} />
     </div>
    );
  }
}




export default ProductsContainer
