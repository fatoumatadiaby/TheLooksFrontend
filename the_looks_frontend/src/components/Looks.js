import React from "react";

const Looks = (props) => {
    return (

    <div>
      {props.looks.looks.map(look => 
        <li> {look.attributes.title} </li>
      )}
    </div>
  );
};

export default Looks;

