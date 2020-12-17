export const addProduct = (data, id) => { // you need the prodcut data and look id to be passed as an argument in order to add product to look t
  return (dispatch) => {
    fetch(`http://localhost:3000/looks/${id}/products`, {
      headers: {
        "Content-Type": "application/json",
        'Accept':         "application/json",
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then(look => dispatch({ 
          type: "ADD_PRODUCT", 
          payload: look }))
  };
};
