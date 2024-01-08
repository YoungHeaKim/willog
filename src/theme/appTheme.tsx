import React from 'react';
import styled from 'styled-components';
import colors from '@src/constants/colors';
import { ValueOf } from '@src/types';
import fonts from './fonts';

// eslint-disable-next-line import/no-cycle
import type { FontSizeTypoType, FontTypoType } from './types';

const getTypo = (
  size: FontSizeTypoType,
  type: FontTypoType,
  bold?: ValueOf<typeof fonts>,
) => {
  const { fontSize, lineHeight, fontFamily } = getFontTypo(size, type, bold);

  return `font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}px`;
};

const getFontTypo: (
  size: FontSizeTypoType,
  type: FontTypoType,
  bold?: ValueOf<typeof fonts>,
) => {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
} = (size, type, bold) => {
  let fontFamily: ValueOf<typeof fonts> = fonts.REGULAR;
  let fontSize = 16;
  let lineHeight = 24;
  if (type === 'heading') {
    fontFamily = fonts.BOLD;
    switch (size) {
      case 'heading1':
        fontSize = 24;
        lineHeight = 36;
        break;
      case 'heading2':
        fontSize = 20;
        lineHeight = 30;
        break;
      case 'heading3':
        fontSize = 18;
        lineHeight = 27;
        break;
      case 'heading4':
        fontSize = 16;
        lineHeight = 24;
        break;
      case 'heading5':
        fontSize = 14;
        lineHeight = 20;
        break;
      case 'heading6':
        fontSize = 12;
        lineHeight = 18;
        break;
      default:
    }
  }
  if (type === 'body') {
    switch (size) {
      case 'body1':
        fontSize = 16;
        lineHeight = 24;
        break;
      case 'body2':
        fontSize = 14;
        lineHeight = 20;
        break;
      case 'body3':
        fontSize = 12;
        lineHeight = 18;
        break;
      case 'body4':
        fontSize = 10;
        lineHeight = 15;
        break;
      default:
    }
  }
  if (type === 'button') {
    fontFamily = bold || fonts.MEDIUM;
    switch (size) {
      case 'button_r1':
        fontSize = 16;
        lineHeight = 24;
        break;
      case 'button_m1':
        fontSize = 16;
        lineHeight = 24;
        break;
      case 'button_r2':
        fontSize = 14;
        lineHeight = 20;
        break;
      case 'button_m2':
        fontSize = 14;
        lineHeight = 20;
        break;
      case 'button_r3':
        fontSize = 12;
        lineHeight = 18;
        break;
      case 'button_m3':
        fontSize = 12;
        lineHeight = 18;
        break;
      case 'button_r4':
        fontSize = 10;
        lineHeight = 14;
        break;
      case 'button_m4':
        fontSize = 10;
        lineHeight = 14;
        break;
      default:
        break;
    }
  }
  return { fontFamily, fontSize, lineHeight };
};

const appColor = {
  colors: {
    carpetRed: '#E60A14',
    darkRed: '#BE0000',
    carpetBlack: '#19191E',
    darkBlack: '#000000',
    gray1: '#2E2E30',
    gray2: '#646464',
    gray3: '#949494',
    gray4: '#D2D2D2',
    gray5: '#EFEFEF',
    gray6: '#F6F6F6',
    white: '#ffffff',
    red: '#E60000',
    blue: '#107EFF',
    orange: '#FE7E08',
    yellow: '#FFC600',
    green: '#009106',
  },
};

export const ImageIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const appStyle = {
  common: {
    container: {
      backgroundColor: appColor.colors.white,
    },
    text: {
      color: appColor.colors.gray1,
    },
    navigationHeader: {
      fontSize: 16,
      lineHeight: 24,
      backgroundColor: appColor.colors.white,
    },
  },
  styledTypo: {
    heading1: getTypo('heading1', 'heading'),
    heading2: getTypo('heading2', 'heading'),
    heading3: getTypo('heading3', 'heading'),
    heading4: getTypo('heading4', 'heading'),
    heading5: getTypo('heading5', 'heading'),
    heading6: getTypo('heading6', 'heading'),
    body1: getTypo('body1', 'body'),
    body2: getTypo('body2', 'body'),
    body3: getTypo('body3', 'body'),
    body4: getTypo('body4', 'body'),
    button_m1: getTypo('button_m1', 'button', fonts.MEDIUM),
    button_m2: getTypo('button_m2', 'button', fonts.MEDIUM),
    button_m3: getTypo('button_m3', 'button', fonts.MEDIUM),
    button_m4: getTypo('button_m4', 'button', fonts.MEDIUM),
    button_r1: getTypo('button_r1', 'button', fonts.REGULAR),
    button_r2: getTypo('button_r2', 'button', fonts.REGULAR),
    button_r3: getTypo('button_r3', 'button', fonts.REGULAR),
    button_r4: getTypo('button_r4', 'button', fonts.REGULAR),
  },
  spacing: {
    spacing1: 120,
    spacing2: 96,
    spacing3: 80,
    spacing4: 64,
    spacing5: 40,
    spacing6: 32,
    spacing7: 24,
    spacing8: 20,
    spacing9: 16,
    spacing10: 8,
    spacing11: 4,
  },
  main: {},
};

export const appTheme = { appColor, appStyle };

export type AppColor = keyof typeof appColor.colors;

type Theme = typeof appTheme;
type Colors = typeof colors;

interface Color {
  colors: Colors;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme, Color {}
}
