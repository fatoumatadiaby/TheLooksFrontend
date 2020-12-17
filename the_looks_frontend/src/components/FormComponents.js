import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html {
     height: 100%;
 }
 body {
     font-family: Arial, Helvetica, sans-serif;
     background: white;
     height: 100%;
     margin: 0;
     color: #555
 }

`;

export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10 px 0 20px 0;
  padding: 20 px
  box-sizing: border-box;

`

// export const StyledFormWrapper = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   padding: 0 20px;
// `

export const StyledForm = styled.form `
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);



`
export const H1 = styled.h1`
  color: black;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%
  ${sharedStyles}

`;
export const Label = styled.label`
font-size: 25px;
color: tan;
`
;

export const StyledButton = styled.button`
display: block;
background-color: black
color: white;
font-size: .9rem;
border: 0;
border-radius: 5px;
height: 40px;
padding: 0px 20px;
cursor: pointer;
box-sizing: border-box;

`;

// export const StyledFieldSet = styled.fieldset `

// `
// export const StyledError = styled.div
// export const StyledTextArea = styled.textarea `

// `