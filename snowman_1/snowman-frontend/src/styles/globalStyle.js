import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
    color: white;

  input {
  outline: none;
  }

  a {
  text-decoration: none;
  }
}
`;

export default GlobalStyle;
