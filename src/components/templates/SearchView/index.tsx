import React, { FormEventHandler, useEffect, useState } from 'react';
import MainImage from '../../../assets/MainBanner.jpg';
import SearchIcon from '../../../assets/search.png';
import colors from '../../../constants/colors';
import { Typo } from '../../atoms';
import {
  SearchHeader,
  SearchInnerHeader,
  SearchInput,
  SearchWrap,
} from './styles';

const SearchView: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <SearchWrap>
      <SearchHeader
        style={{
          backgroundImage: `url(${MainImage})`,
        }}
      >
        <SearchInnerHeader>
          <Typo
            size={innerWidth > 720 ? 'DISPLAY2' : 'DISPLAY3'}
            color={colors.GRAY8}
          >
            Will Photo
          </Typo>
          <Typo
            size={innerWidth > 720 ? 'BODY7' : 'BODY12'}
            color={colors.GRAY8}
            style={{ marginTop: '10px' }}
          >
            인터넷의 시각자료 출처입니다. <br />
            모든 지역에 있는 크리에터들의 지원을 받습니다.
          </Typo>
          <SearchInput
            value={search}
            onChange={handleChange}
            placeholder="고해상도 이미지 검색"
            buttonSrc={SearchIcon}
          />
        </SearchInnerHeader>
      </SearchHeader>
    </SearchWrap>
  );
};

export default SearchView;
