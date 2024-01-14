import React, { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainImage from '../../../assets/MainBanner.jpg';
import SearchIcon from '../../../assets/search.png';
import colors from '../../../constants/colors';
import { Typo } from '../../atoms';
import {
  SearchHeader,
  SearchInnerHeader,
  SearchInput,
  SearchItem,
  SearchResultWrap,
  SearchWrap,
} from './styles';
import { PhotoListResponse } from 'apis/images';
import { useImageActions, useImage } from 'hooks';

const BookMarkView: React.FC = () => {
  const { setImages } = useImageActions();
  const { images } = useImage();

  const handleBookMark = (v: PhotoListResponse) => {
    if (images.find(item => item.id === v.id)) {
      const filterImages = images.filter(item => item.id !== v.id);
      setImages(filterImages);
    } else {
      const pushImages = [...images, v];
      setImages(pushImages);
    }
  };

  return (
    <SearchWrap>
      <SearchResultWrap isEmpty={images.length === 0}>
        {images.length !== 0 ? (
          images.map(item => (
            <SearchItem key={item.id}>
              <img
                src={item.urls.thumb}
                alt={item.alt_description}
                width={'100%'}
                height={'100%'}
              />
              {/* <button><img src={} alt={'북마크'} /></button> */}
            </SearchItem>
          ))
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
