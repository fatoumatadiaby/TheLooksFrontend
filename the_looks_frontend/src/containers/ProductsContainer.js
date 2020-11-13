import React from 'react'
import { connect } from "react-redux";

import {fetchProducts} from '../actions/fetchProducts'
import Products from '../components/Products'
import ProductInput from '../components/ProductInput';

class ProductsContainer extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }
   
    render() {
         return (
             <div> 
                <ProductInput/>
                <Products products={this.props.products}/>
             </div>
         )
    }
}
const mapStateToProps = state => {
    return { 
        products: state.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductsContainer)