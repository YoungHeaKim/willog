import React, { CSSProperties } from 'react';
import colors from '../../../constants/colors';
import { ButtonSize, ButtonType } from './types';

export const getButtonStyle = (
  type?: ButtonType,
  size?: ButtonSize,
  disabled?: boolean,
) => {
  const style: CSSProperties = {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  };
  switch (type) {
    // 검정 버튼
    case 'solid-main':
      style.backgroundColor = disabled ? colors.GRAY7 : colors.GRAY2;
      style.border = disabled
        ? `1px solid ${colors.GRAY7}`
        : `1px solid ${colors.GRAY2}`;
      break;
    case 'solid-red':
      style.backgroundColor = disabled ? colors.GRAY7 : colors.RED4;
      style.border = disabled
        ? `1px solid ${colors.GRAY7}`
        : `1px solid ${colors.RED4}`;
      break;
    case 'solid-light-red':
      style.backgroundColor = disabled ? colors.GRAY7 : colors.SECONDARY9;
      style.border = disabled
        ? `1px solid ${colors.GRAY7}`
        : `1px solid ${colors.SECONDARY9}`;
      break;
    // 회색버튼
    case 'solid-gray':
      style.backgroundColor = colors.GRAY8;
      style.border = `1px solid ${colors.GRAY8}`;
      break;
    case 'outline-main':
      style.backgroundColor = colors.GRAY8;
      style.border = disabled
        ? `1px solid ${colors.GRAY4}`
        : `1px solid ${colors.GRAY1}`;
      break;
    case 'outline-red':
      style.backgroundColor = colors.GRAY8;
      style.border = disabled
        ? `1px solid ${colors.GRAY8}`
        : `1px solid ${colors.SECONDARY4}`;
      break;
    case 'outline-gray':
      style.backgroundColor = colors.GRAY8;
      style.border = `1px solid ${colors.GRAY6}`;
      break;
    default:
      break;
  }
  switch (size) {
    case 'H_56':
      style.padding = '16px 2px';
      style.height = 56;
      break;
    case 'H_48':
      style.padding = '14px 20px';
      style.height = 48;
      break;
    case 'H_44':
      style.padding = '12px 16px';
      style.height = 44;
      break;
    case 'H_36':
      style.padding = '9px 12px';
      style.height = 36;
      break;
    case 'H_32':
      style.padding = '7px 10px';
      style.height = 32;
      break;
    default:
      break;
  }
  return style;
};

export const getLabelTypo = (size?: ButtonSize) => {
  switch (size) {
    case 'H_56':
      return 'BUTTON2';
    case 'H_48':
      return 'BUTTON3';
    case 'H_44':
      return 'BUTTON3';
    case 'H_36':
      return 'BUTTON4';
    case 'H_32':
      return 'BUTTON4';
    default:
      return 'BUTTON4';
  }
};

export const getLabelColor = (type?: ButtonType, disabled?: boolean) => {
  switch (type) {
    case 'solid-main':
      return disabled ? colors.GRAY8 : colors.GRAY8;
    case 'solid-red':
      return disabled ? colors.GRAY8 : colors.GRAY8;
    case 'solid-light-red':
      return disabled ? colors.GRAY8 : colors.SECONDARY4;
    case 'solid-gray':
      return disabled ? colors.GRAY8 : colors.GRAY2;
    case 'outline-main':
      return disabled ? colors.GRAY8 : colors.GRAY2;
    case 'outline-red':
      return disabled ? colors.GRAY8 : colors.SECONDARY4;
    case 'outline-gray':
      return disabled ? colors.GRAY8 : colors.GRAY4;
    default:
      return colors.GRAY7;
  }
};

export const getPressedLabelStyle = (type?: ButtonType) => {
  switch (type) {
    case 'solid-light-red':
      return colors.SECONDARY3;
    case 'outline-red':
      return colors.SECONDARY3;
    default:
      return undefined;
  }
};

export const getPressedStyle = (type?: ButtonType) => {
  switch (type) {
    case 'solid-main':
      return { backgroundColor: colors.GRAY1 };
    case 'solid-red':
      return { backgroundColor: colors.SECONDARY3 };
    case 'solid-light-red':
      return { backgroundColor: colors.SECONDARY8 };
    case 'solid-gray':
      return { backgroundColor: colors.GRAY7 };
    case 'outline-main':
      return { borderColor: colors.GRAY1 };
    case 'outline-gray':
      return { borderColor: colors.GRAY5 };
    case 'outline-red':
      return { borderColor: colors.SECONDARY2 };
    default:
      return { backgroundColor: colors.GRAY2 };
  }
};
