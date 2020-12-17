import React from "react";
// import looksContainer from "../containers/looksContainer";
import ProductsContainer from "../containers/ProductsContainer";
import { StylePage, Li } from "./Static";


const Look = (props) => {
  // let look = props.looks[props.match.params.id -1];

  let look = props.looks.filter((looks) => {return looks.id == props.match.params.id})[0]

  // debugger;

  return (
    <div>
      <StylePage>
        <h2>
          <Li> Title: {look ? look.title : null} </Li>
          <Li>Notes: {look ? look.note : null} </Li>
        </h2>
        <ProductsContainer look={look} />
      </StylePage>
    </div>
  );
}
export default Look 