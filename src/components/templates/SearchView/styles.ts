import styled from 'styled-components';
import colors from '../../../constants/colors';
import { MOBILE, mediaQueries } from '../../../styles/mediaQueries';
import { Input } from 'components/atoms';

export const SearchWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  // background-color: blue;

  ${mediaQueries(MOBILE)} {
    max-width: 100vw;
    // background-color: red;
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 300px;
  background-repeat: no-repeat;
`;

export const SearchInnerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px 0;
`;

export const SearchInput = styled(Input)`
  margin-top: 10px;
  border-radius: 10px;
`;
