import React from "react";

const Looks = (props) => {
    return (

    <div>
      {props.looks.looks.map(look => 
        <li key={look.id}>  {look.attributes.title} </li>
      )}
    </div>
  );
};

export default Looks;

