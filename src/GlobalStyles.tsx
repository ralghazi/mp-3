import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 auto;
        box-sizing: border-box;
    }
    html, body {
        margin: 0 auto;
        padding: 0; 
        display: flex;
        justify-content: center;
    }
    
`;

export default GlobalStyles;