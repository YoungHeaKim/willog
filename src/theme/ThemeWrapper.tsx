import React, { ReactElement } from 'react';
import {
  ThemeProvider,
  DefaultTheme as StyledComponentsTheme,
} from 'styled-components';
import colors from '../constants/colors';
import { appTheme } from './appTheme';

// @ts-ignore
const themes: StyledComponentsTheme = {
  colors,
} as const;

const ThemeWrapper = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => (
  <ThemeProvider theme={{ ...appTheme, ...themes }}>{children}</ThemeProvider>
);

export default ThemeWrapper;
