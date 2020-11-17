export default function lookReducer(state = {looks: []}, action) {


 switch (action.type) {
   case "FETCH_LOOKS":
     return { looks: action.payload };
    case "ADD_LOOK" :
      return {...state, looks: [...state.looks, action.payload]}
   default:
     return state;
 }
}



// take in a set and update reducer according to action type reducers are functions. state is the first argument passed to a function we want to set an intital state. states mostly will be an object 