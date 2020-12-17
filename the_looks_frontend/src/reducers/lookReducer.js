export default function lookReducer(state = {looks: []}, action) { //value of looks are saved into an empty bracket as the current state so as the ui is being updated the state is being updated, the action is set as an argument when defining the function because the action determines what happenes to the state . you can chain actions to pull specific data from the dispatch 


 switch (action.type) { //creating a switch statement because switch statements help with the conditionals the argument action.type reflects the action folder dispatch action so were looking for the specific fetch method that reflects the action type the user interacts with
   case "FETCH_LOOKS": // we name the case after the action type to create the corrolation between the reducer and actions 
     return { looks: action.payload }; // then we return the information we want reflected on the UI in this case its the type looks (key) and the value we want to pull which is action.payload. payload is the data from the fetch function
   case "ADD_LOOK" : //defining a new case based off the action folder this updates the state
     return {...state, looks: [...state.looks, action.payload]} // we use the spread operator to non destructivly alter the array so we return the cuurent state plus the new look that we just rendered to add to it
   case "ADD_PRODUCT": // calling the case where we add a product to looks
       let looks = state.looks.map(look => { // we have to map over all of the present looks created and stored in the state
            if (look.id === action.payload.id) { // because i am trying to find a partiular look that
              return action.payload
            }else{
               return look
            }
         })
            return {...state, looks: looks }
      case "DELETE_LOOK":
        let currentLooks = state.looks.filter(look => {
             return look.id !== action.payload.id
                
             })
          return {...state, looks: currentLooks}
     default:
      return state;
 
    
    }
}



//action + state = updated state
// 