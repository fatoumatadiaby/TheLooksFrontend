import React from "react";
import Look from './Look'
import {Link} from 'react-router-dom'

const Looks = (props) => {
  // const handleDelete = () => {};
 return (
   <div>
     {props.looks.looks.map((look) => (
       <div key={look.id}>
         <Link to={`/looks/${look.id}`}>
           {look.title} <button>Delete</button>
         </Link>
       </div>
     ))}
   </div>
 );
};

export default Looks;

