import React, { CSSProperties, HTMLProps, ReactElement } from 'react';
import { styled } from 'styled-components';

interface Props extends HTMLProps<HTMLInputElement> {}

const Input = ({ ...rest }: Props): ReactElement => {
  return <InputStyle {...rest} />;
};

const InputStyle = styled.input`
  display: flex;
  border: 0;
`;

export default Input;
