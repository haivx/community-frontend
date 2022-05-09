import { css } from '@emotion/react';

import { fontStyle } from './fonts';
import { customStyle } from './custom';
import { resetCSS } from './reset';

export const globalStyle = css`
  ${resetCSS}
  ${fontStyle}
  ${customStyle}

  // Use a more-intuitive box-sizing model.
  *, *::before, *::after {
    box-sizing: border-box;
  }
  // Remove default margin
  * {
    margin: 0;
  }

  html {
    font-size: 16px;
    overflow: scroll;
    overflow-x: hidden;
    height: 100%;
  }

  span {
    font-weight: 400;
  }
  // create a stacking context, without z-index. This ensures that all portal content(tooltip, modal,...) will float above the Next app
  #__next {
    isolation: isolate
  }
  /*
    Typographic tweaks!
    Improve text rendering
  */
  body {
    font-family: BeVietnamPro, sans-serif;
    line-height: 1.5;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  :not(.scroll-content)::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  iframe {
    pointer-events: none;
  }
`;
