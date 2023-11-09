import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }
    h1,h2{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        font-size:1.5rem;
    }
    h1{
        line-height: 3;
        background-color: lightblue; 

        font-weight:800;
    }
    h2{
        line-height:1;
        font-weight:500;
        margin-top:3rem;
    }
    button{
        margin-left:3rem;
        margin-right:3rem;

        margin-top:2rem;
        margin-bottom:3rem;
    }

    div, span, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;

        vertical-align: baseline;
    }
    body{
        font-family: "고딕", sans-serif;
        margin-bottom: 100px;
    }
`;
export default GlobalStyles;