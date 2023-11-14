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
}

* {
    box-sizing: border-box;
}`;