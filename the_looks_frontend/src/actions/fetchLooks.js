// import Looks from '../components/Looks'

export function fetchLooks() {
   return (dispatch) => {
     fetch("http://localhost:3000/looks")
       .then((res) => res.json())
       .then((looks) => dispatch({
           type: "FETCH_LOOKS",
           payload: looks
          
         })
       );
   };
}
