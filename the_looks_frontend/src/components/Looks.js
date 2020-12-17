import React from "react";
import {Link} from 'react-router-dom'
import { StylePage, Li } from "./Static";
import { connect } from "react-redux";
import  {deleteLook}  from "../actions/deleteLook";

const Looks = (props) => {
  
  const handleDelete = (look) => {
     props.deleteLook(look.id);
   };
 return (
   <div>
     <StylePage>
       {props.looks.map((look) => (
         <div key={look.id}>
           <Li>
             {" "}
             <Link to={`/looks/${look.id}`}>{look.title}</Link><button onClick={()=> handleDelete(look)}>Delete</button>
           </Li>
         </div>
       ))}
     </StylePage>
   </div>
 );
};

export default connect(null, { deleteLook })(Looks);

