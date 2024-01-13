import styled from 'styled-components';
import { MOBILE, mediaQueries } from '../../../styles/mediaQueries';
import { LabelInput } from 'components/molecules';

export const SearchWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${mediaQueries(MOBILE)} {
    max-width: 100vw;
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SearchInnerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px 0;

  ${mediaQueries(MOBILE)} {
    width: 70%;
  }
`;

export const SearchInput = styled(LabelInput)`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
`;
