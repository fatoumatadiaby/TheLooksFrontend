import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchProducts } from "../actions/fetchProducts";
import Products from "../components/Products";

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div>
        {/* <Route exact path="/products" render={(routerProps) => (  <Products {...routerProps} products={this.props.products} /> )} /> */}

        <Products products={this.props.look && this.props.look.products} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { fetchProducts })(ProductsContainer);
