import React from 'react';
import MainImage from '../../../assets/MainBanner.jpg';
import colors from '../../../constants/colors';
import { Input, Typo } from '../../atoms';
import { SearchHeader, SearchInnerHeader, SearchWrap } from './styles';

const SearchView: React.FC = () => {
  return (
    <SearchWrap>
      <SearchHeader
        style={{
          backgroundImage: `url(${MainImage})`,
        }}
      >
        <SearchInnerHeader>
          <Typo size={'DISPLAY2'} color={colors.GRAY8}>
            Will Photo
          </Typo>
          <Typo
            size={'BODY7'}
            color={colors.GRAY8}
            style={{ marginTop: '10px' }}
          >
            인터넷의 시각자료 출처입니다. <br />
            모든 지역에 있는 크리에터들의 지원을 받습니다.
          </Typo>
          <Input placeholder="테스트" style={{ marginTop: '10px' }} />
        </SearchInnerHeader>
      </SearchHeader>
    </SearchWrap>
  );
};

export default SearchView;
