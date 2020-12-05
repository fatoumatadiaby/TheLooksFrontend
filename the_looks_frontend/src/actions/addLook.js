export const addLook = (data) => {

   return (dispatch) => {
     fetch("http://localhost:3000/looks", {
       headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify(data)
     })
       .then(response => response.json())
       .then(look => dispatch({type: 'ADD_LOOK', payload: look}))
    
   }
}
