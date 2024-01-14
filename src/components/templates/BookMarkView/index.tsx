import React, { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainImage from '../../../assets/MainBanner.jpg';
import SearchIcon from '../../../assets/search.png';
import colors from '../../../constants/colors';
import { Typo } from '../../atoms';
import { SearchResultWrap, SearchWrap } from './styles';
import ImageItem from 'components/molecules/ImageItem';
import { useImage } from 'hooks';

const BookMarkView: React.FC = () => {
  const { images } = useImage();

  return (
    <SearchWrap>
      <SearchResultWrap isEmpty={images.length === 0}>
        {images.length !== 0 ? (
          images.map(item => <ImageItem item={item} />)
        ) : (
          <Typo size={'BODY2'} color={colors.GRAY1}>
            아무 사진이 없습니다.
          </Typo>
        )}
      </SearchResultWrap>
    </SearchWrap>
  );
};

export default BookMarkView;
