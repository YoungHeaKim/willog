import { styled } from 'styled-components';
import { MOBILE, mediaQueries } from 'styles/mediaQueries';

export const ItemView = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 200px;
  overflow: hidden;
  position: relative;

  ${mediaQueries(MOBILE)} {
    width: 32%;
  }
`;

export const BookmarkButton = styled.button<{ isSelect: boolean }>`
  position: absolute;
  bottom: 5px;
  right: 5px;

  & img {
    ${({ isSelect }) => !isSelect && `background-color: white`}
  }
`;
