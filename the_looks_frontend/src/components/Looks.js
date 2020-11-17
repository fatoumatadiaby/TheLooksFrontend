import React from "react";
import Look from './Look'

const Looks = (props) => {
    return (

    <div>
      {props.looks.map(look => 
        <div key={look.id}><Look look={look}/></div>
      )}
    </div>
  );
};

export default Looks;

