import React from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Cloud from "./components/Cloud";
import Smiles from "./components/Smiles";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Apercu Arabic Pro';
  src: local('Apercu Arabic Pro Regular'), local('ApercuArabicPro-Regular'),
  url('fonts/ApercuArabicPro-Regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
} 

body {
  font-family: "Apercu Arabic Pro";
  background-color: #FFF;
  width: 100%;

  overflow-x: hidden;

  @media (max-width: 360px), screen and (orientation: portrait){
    overflow-x: hidden;
  }
}
`

const AppContainer = styled.div`
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export default function FeedbackForm() {
    return(
        <AppContainer>
          <Global />
          <Form />  
          <Footer /> 

          <Cloud /> 
          <Smiles />
          <Map />
        </AppContainer>
    )
}