import Products from "../components/Products";

export function fetchProducts() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/products')
    .then(res => res.json())
    .then(products => dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products.data
    }))

    }
}
