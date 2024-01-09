import styled from 'styled-components';
import { MOBILE, mediaQueries } from '../../styles/mediaQueries';

export const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: blue;

  ${mediaQueries(MOBILE)} {
    max-width: 100vw;
    background-color: red;
  }
`;
