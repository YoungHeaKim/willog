import fonts from '../../../theme/fonts';

export type TypoKey = keyof typeof typoPresets;

export type TypoStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight?: number;
};

export const typoPresets = {
  DISPLAY1: {
    fontFamily: fonts.BOLD,
    fontSize: 48,
    lineHeight: 68,
  },
  DISPLAY2: {
    fontFamily: fonts.BOLD,
    fontSize: 40,
    lineHeight: 56,
  },
  DISPLAY3: {
    fontFamily: fonts.BOLD,
    fontSize: 32,
    lineHeight: 44,
  },
  H1: {
    fontFamily: fonts.BOLD,
    fontSize: 28,
    lineHeight: 42,
  },
  H2: {
    fontFamily: fonts.BOLD,
    fontSize: 24,
    lineHeight: 36,
  },
  H3: {
    fontFamily: fonts.BOLD,
    fontSize: 22,
    lineHeight: 34,
  },
  H4: {
    fontFamily: fonts.BOLD,
    fontSize: 20,
    lineHeight: 30,
  },
  H5: {
    fontFamily: fonts.BOLD,
    fontSize: 19,
    lineHeight: 28,
  },
  H6: {
    fontFamily: fonts.BOLD,
    fontSize: 18,
    lineHeight: 26,
  },
  H7: {
    fontFamily: fonts.BOLD,
    fontSize: 17,
    lineHeight: 26,
  },
  H8: {
    fontFamily: fonts.BOLD,
    fontSize: 16,
    lineHeight: 24,
  },
  H9: {
    fontFamily: fonts.BOLD,
    fontSize: 15,
    lineHeight: 22,
  },
  H10: {
    fontFamily: fonts.BOLD,
    fontSize: 14,
    lineHeight: 20,
  },
  H11: {
    fontFamily: fonts.BOLD,
    fontSize: 13,
    lineHeight: 20,
  },
  H12: {
    fontFamily: fonts.BOLD,
    fontSize: 12,
    lineHeight: 18,
  },
  H13: {
    fontFamily: fonts.BOLD,
    fontSize: 11,
    lineHeight: 16,
  },
  BODY1: {
    fontFamily: fonts.REGULAR,
    fontSize: 28,
    lineHeight: 42,
  },
  BODY2: {
    fontFamily: fonts.REGULAR,
    fontSize: 24,
    lineHeight: 36,
  },
  BODY3: {
    fontFamily: fonts.REGULAR,
    fontSize: 22,
    lineHeight: 34,
  },
  BODY4: {
    fontFamily: fonts.REGULAR,
    fontSize: 20,
    lineHeight: 30,
  },
  BODY5: {
    fontFamily: fonts.REGULAR,
    fontSize: 19,
    lineHeight: 28,
  },
  BODY6: {
    fontFamily: fonts.REGULAR,
    fontSize: 18,
    lineHeight: 26,
  },
  BODY7: {
    fontFamily: fonts.REGULAR,
    fontSize: 17,
    lineHeight: 26,
  },
  BODY8: {
    fontFamily: fonts.REGULAR,
    fontSize: 16,
    lineHeight: 24,
  },
  BODY9: {
    fontFamily: fonts.REGULAR,
    fontSize: 15,
    lineHeight: 22,
  },
  BODY10: {
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    lineHeight: 20,
  },
  BODY11: {
    fontFamily: fonts.REGULAR,
    fontSize: 13,
    lineHeight: 20,
  },
  BODY12: {
    fontFamily: fonts.REGULAR,
    fontSize: 12,
    lineHeight: 18,
  },
  BODY13: {
    fontFamily: fonts.REGULAR,
    fontSize: 11,
    lineHeight: 16,
  },
  BODY1_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 28,
    lineHeight: 42,
  },
  BODY2_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 24,
    lineHeight: 36,
  },
  BODY3_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 22,
    lineHeight: 34,
  },
  BODY4_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 20,
    lineHeight: 30,
  },
  BODY5_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 19,
    lineHeight: 28,
  },
  BODY6_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 18,
    lineHeight: 26,
  },
  BODY7_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 17,
    lineHeight: 26,
  },
  BODY8_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 16,
    lineHeight: 24,
  },
  BODY9_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 15,
    lineHeight: 22,
  },
  BODY10_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
  },
  BODY11_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 13,
    lineHeight: 20,
  },
  BODY12_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 12,
    lineHeight: 18,
  },
  BODY13_M: {
    fontFamily: fonts.MEDIUM,
    fontSize: 11,
    lineHeight: 16,
  },
  BUTTON1: {
    fontFamily: fonts.MEDIUM,
    fontSize: 19,
    lineHeight: 26,
  },
  BUTTON2: {
    fontFamily: fonts.MEDIUM,
    fontSize: 17,
    lineHeight: 24,
  },
  BUTTON3: {
    fontFamily: fonts.MEDIUM,
    fontSize: 15,
    lineHeight: 20,
  },
  BUTTON4: {
    fontFamily: fonts.MEDIUM,
    fontSize: 13,
    lineHeight: 18,
  },
  BUTTON5: {
    fontFamily: fonts.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },
  LABEL1: {
    fontFamily: fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 16,
  },
  LABEL2: {
    fontFamily: fonts.MEDIUM,
    fontSize: 13,
    lineHeight: 14,
  },
  LABEL3: {
    fontFamily: fonts.MEDIUM,
    fontSize: 11,
    lineHeight: 12,
  },
} as const;
