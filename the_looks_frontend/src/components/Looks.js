import React from "react";
import Look from './Look'
import {Route, Link} from 'react-router-dom'

const Looks = (props) => {
   
 return (
    <div>
      {props.looks.looks.map(look => 
        <div key={look.id}>
            <Link  to={`/looks/${look.id}`}>
            {look.attributes.title} 
            </Link>
        </div>
      )}
    </div>
  );
};

export default Looks;

