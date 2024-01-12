import React, { CSSProperties, ReactElement, ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  children?: string | ReactNode | ReactNode[];
  isCenter?: boolean;
  style?: CSSProperties;
}

const Row = ({ children, isCenter = false, ...rest }: Props): ReactElement => {
  return (
    <RowStyle isCenter={isCenter} {...rest}>
      {children}
    </RowStyle>
  );
};

const RowStyle = styled.div<{ isCenter: boolean }>`
  display: flex;
  ${isCenter => isCenter && `justify-content: center; align-items: center;`}
`;

export default Row;
