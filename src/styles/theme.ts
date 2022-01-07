import { colors } from './colors';

export const theme = {
  colors,
};

type ThemeType = typeof theme;
declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
