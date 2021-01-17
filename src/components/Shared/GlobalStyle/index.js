import { Colors } from 'constants/styles/Colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    color: ${Colors.PRIMARY};
    font-weight: 400;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
