export const deleteLook = (lookId) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/looks", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: "DELETE_LOOK", payload: lookId })
      );
  };
};
