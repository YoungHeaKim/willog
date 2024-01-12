import React, { CSSProperties, ReactElement, ReactNode, useState } from 'react';
import { styled } from 'styled-components';
import fonts from '../../../theme/fonts';
import { typoPresets } from '../Typo/types';
import { ButtonSize, ButtonType } from './types';
import {
  getButtonStyle,
  getLabelColor,
  getLabelTypo,
  getPressedLabelStyle,
  getPressedStyle,
} from './utils';

interface Props {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  label?: string;
  style?: CSSProperties;
  contentsStyle?: CSSProperties;
  children?: string | ReactNode | ReactNode[];
  onPress?: () => void;
}

const Button = ({
  type = 'solid-main',
  size = 'H_56',
  disabled = false,
  label,
  style,
  onPress,
  contentsStyle,
  children,
  ...rest
}: Props): ReactElement => {
  const [isPressed, setIsPressed] = useState(false);
  const buttonStyle = getButtonStyle(type, size, disabled);
  const labelColor = getLabelColor(type, disabled);
  const labelTypo = getLabelTypo(size);
  const pressedLabelColor = !disabled ? getPressedLabelStyle(type) : undefined;
  const pressedStyle = !disabled ? getPressedStyle(type) : undefined;
  const typoPreset = labelTypo ? typoPresets[labelTypo] : undefined;

  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...rest}
    >
      <div
        style={{
          flexDirection: 'row',
          overflow: 'hidden',
          ...buttonStyle,
          ...pressedStyle,
          ...contentsStyle,
        }}
      >
        {children ?? (
          <>
            {label && (
              <Text
                fontFamily={typoPreset?.fontFamily}
                fontSize={typoPreset?.fontSize}
                lineHeight={typoPreset?.lineHeight}
                color={
                  isPressed && pressedLabelColor
                    ? pressedLabelColor
                    : labelColor
                }
              >
                {label}
              </Text>
            )}
          </>
        )}
      </div>
    </button>
  );
};

const Text = styled.div<{
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
}>`
  font-family: ${({ fontFamily }) => fontFamily ?? fonts.REGULAR};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : 'undefined')};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : 'undefined'};
  color: ${({ color, theme }) => color ?? theme.colors.GRAY2};
`;

export default Button;
