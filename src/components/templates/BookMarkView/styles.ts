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
  height: 400px;
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

export const SearchResultWrap = styled.div<{ isEmpty: boolean }>`
  display: flex;
  ${({ isEmpty }) => isEmpty && 'justify-content: center'};
  ${({ isEmpty }) => isEmpty && 'align-items: center'};
  flex-wrap: wrap;
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 20px 1%;

  ${mediaQueries(MOBILE)} {
    width: 95vw;
    justify-content: space-between;
    gap: 10px 1%;
  }
`;

export const SearchItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24%;
  height: 200px;
  overflow: hidden;

  ${mediaQueries(MOBILE)} {
    width: 32%;
  }
`;
