export type HeadingTypoType =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6';
export type BodyTypoType = 'body1' | 'body2' | 'body3' | 'body4';
export type ButtonTypoType =
  | 'button_r1'
  | 'button_r2'
  | 'button_r3'
  | 'button_r4'
  | 'button_m1'
  | 'button_m2'
  | 'button_m3'
  | 'button_m4';
export type ButtonSizeType = 'large' | 'middle' | 'small';

export type FontSizeTypoType = HeadingTypoType | BodyTypoType | ButtonTypoType;
export type FontTypoType = 'heading' | 'body' | 'button';
