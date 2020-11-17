import React from "react";
// import Looks from './Looks'

const Look = (props) => {
    console.log(props)
    let look = props.looks[props.match.params.id - 1];
    return (
       <li>
        {look ? look.attributes.title : null}
      </li>
   )
}
export default Look 