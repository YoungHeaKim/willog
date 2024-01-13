import React, { CSSProperties, HTMLProps, ReactElement } from 'react';
import { styled } from 'styled-components';

interface Props extends HTMLProps<HTMLInputElement> {
  style?: CSSProperties;
}

const Input = ({ ...rest }: Props): ReactElement => {
  return <InputStyle {...rest} />;
};

const InputStyle = styled.input`
  display: flex;
`;

export default Input;
