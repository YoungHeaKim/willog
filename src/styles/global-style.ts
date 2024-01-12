import { createGlobalStyle } from 'styled-components';
import { media } from '../theme/appTheme';

export const GlobalStyle = createGlobalStyle`
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    *{
      box-sizing: border-box;
      list-style: none;
    }
    html{
        max-width: 100vw;
        overflow-x: hidden;
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        ${media.tablet}{
            font-size: 10px;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    body{
      max-width: 100vw;
      overflow-x: hidden;
      margin: 0;
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
