import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
#root, body, html {

}

html {

}

button {
    cursor: pointer;
    background-color: black;
    color: white;

    padding: 10px 15px;
    border-radius: 0;

    &:hover {
      background-color: white;
      color: purple;
      border: 2px solid black;
    }
}

* {
    box-sizing: border-box;
}`;