import React, { CSSProperties, HTMLProps, ReactElement } from 'react';
import { styled } from 'styled-components';
import { Button, Input } from 'components/atoms';
import colors from 'constants/colors';

interface Props extends HTMLProps<HTMLInputElement> {
  buttonSrc?: string;
  style?: CSSProperties;
  onClick: () => void;
}

const LabelInput = ({
  children,
  buttonSrc,
  onClick,
  style,
  ...rest
}: Props): ReactElement => {
  return (
    <LabelInputStyle style={style}>
      <Input {...rest} />
      {buttonSrc && (
        <ButtonStyle onClick={onClick}>
          <img src={buttonSrc} alt={'버튼 이미지'} />
        </ButtonStyle>
      )}
    </LabelInputStyle>
  );
};

const LabelInputStyle = styled.div`
  position: relative;
  margin-top: 10px;
  background-color: ${colors.GRAY8};
  border-radius: 8px;
`;

const ButtonStyle = styled.button`
  position: absolute;
  right: 5px;
  top: 3.5px;
  bottom: 0;
  padding: 0;
  overflow: hidden;
  border-radius: 0;
  background-color: ${colors.GRAY8};

  & img {
    width: 20px;
    height: 20px;
  }
`;

export default LabelInput;
