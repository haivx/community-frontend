import { css } from '@emotion/react';

import { fontStyle } from './fonts';
import { customStyle } from './custom';

export const globalStyle = css`
  ${fontStyle}
  ${customStyle}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    overflow: scroll;
    overflow-x: hidden;
  }
  span {
    font-weight: 400;
  }
  body {
    font-family: BeVietnamPro, sans-serif;
    line-height: 1.5rem;
  }
  :not(.scroll-content)::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
