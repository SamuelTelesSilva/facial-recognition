import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;   
    }

    *{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        
    }

    :root {
        --corPrincipal: #5602CC;
        --corSecundaria: #080C2D;
    }
  
`;