import { Colors } from 'constants/styles/Colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html, #root {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${Colors.PRIMARY};
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
