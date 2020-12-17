export const deleteLook = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/looks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((look) => 
        dispatch({ type: "DELETE_LOOK", payload: look })
      );
  };
};

