import styled, { ThemeProvider } from "styled-components";
const colors={
  favYellow :"#eee8aa",
  white : "#ffff",
  gray : "#808080",
  pink : "rgb(255, 192, 203)",
  black: "#000000"
}
const pixelToRem = (size) => `${size / 16}rem`; 
const fontSizes ={
  buttonFont: pixelToRem(60),
  DetailsFont: pixelToRem(40),
  BackForthFont: pixelToRem(30),
}

const common ={
  Container:`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
  `,
  ButtonContainer:`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-wrap: wrap;

    gap: 1rem;
    padding: 0;
  `,
  Button:`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-grow: 1;

    text-align: center;
    text-decoration: none;
    display: inline-block;

    position: relative;
  `,
  HoverButton:`
    background-color: pink; /* 호버 시 배경 색상 변화 */
    color: black;
    border: 2px solid black;
  `,
  BackButton:`
    
  `
}
const theme ={
  fontSizes,
  colors,
  common,
};

export default theme;