import React from 'react';
import colors from '../../../constants/colors';
import { Typo } from '../../atoms';
import { SearchHeader, SearchInnerHeader, SearchWrap } from './styles';

const SearchView: React.FC = () => {
  return (
    <SearchWrap>
      <SearchHeader>
        <SearchInnerHeader>
          <Typo size={'H1'} color={colors.GRAY8}>
            Will Photo
          </Typo>
          <Typo size={'BODY6'} color={colors.GRAY8}>
            인터넷의 시각자료 출처입니다. <br />
            모든 지역에 있는 크리에터들의 지원을 받습니다.
          </Typo>
        </SearchInnerHeader>
      </SearchHeader>
    </SearchWrap>
  );
};

export default SearchView;
