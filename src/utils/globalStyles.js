import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  *:active, *:focus {
    outline: 0;
  }
  body {
    background-color: rgba(211, 213, 216, 0.25);
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    -webkit-overflow-scrolling: touch;
  }
  a, .link {
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: none;
    cursor: pointer;
    text-transform: uppercase;
    color: #999;
    transition: color 0.3s ;
    :hover {
      color: #fff;
    }
  }
  
  ul {
    list-style: none;
  }
  
  input, button {
    outline: none;
    border: none;
  }
`;
