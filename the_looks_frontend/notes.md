USER REDUCER

export default function currentUserReducer(state = { user: [] }, action) {
  switch (action.type) {
    default:
      return state;
  }
};
// export default (state = null, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };


USER LOGIN REDUCER
const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
}

export default function userLoginReducer(state = { initialState: [] }, action) {
  switch (action.type) {
      case "UPDATE_USER_LOGIN":
          return action.formData
    default:
      return state;
  }
};



CURRENT USER REDUCER

export default function currentUserReducer(state = { user: [] }, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user 
    default:
      return state;
  }
}

// export default (state = null, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_USER":
//       return action.user;
//     case "CLEAR_CURRENT_USER":
//       return null;
//     default:
//       return state;
//   }
// };


USER LOGIN
import React from "react"

 class UserLogin extends React.Component {
   render() {
    return (
      <div>
        <form>
            <label> First Name </label>
            <input type='text'placeholder='First Name'/> 
        </form>
     </div>
   )
    }
 }
 export default UserLogin;

 FETCH USER LOGIN 
 export const updateLoginForm = formData =>{
    return {
        type: "UPDATE_USER_LOGIN",
        formData
    }
}

FETCH CURRENT USER
//sync
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER"

    }
}

//async
export const login = credentials => {
    return dispatch => {
       return fetch("http://localhost:3001/api/v1/login", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({first_name: "fatima", password: "123"})
       } 
       )
    }
}


INDEX

 // users: userReducer,
  // currentUserReducer,
  // userLoginReducer,

  // import userReducer from "./reducers/userReducer";
// import currentUserReducer from "./reducers/userReducer";
// import userLoginReducer from "./reducers/userLoginReducer";