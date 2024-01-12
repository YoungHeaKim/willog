import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { styled } from 'styled-components';
import fonts from '../../../theme/fonts';
import { TypoKey, typoPresets } from './types';

interface Props {
  children?: string | ReactNode | ReactNode[];
  size: TypoKey;
  color: string;
  style?: CSSProperties;
  numberOfLines?: number;
}

const Typo = ({
  children,
  size,
  color,
  style,
  numberOfLines,
  ...rest
}: Props): ReactElement => {
  const typoPreset = size ? typoPresets[size] : undefined;

  return (
    <StyledTypo
      fontFamily={typoPreset?.fontFamily}
      fontSize={typoPreset?.fontSize}
      lineHeight={typoPreset?.lineHeight}
      color={color}
      style={style}
      {...rest}
    >
      {children}
    </StyledTypo>
  );
};

const StyledTypo = styled.div<{
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

export default Typo;
