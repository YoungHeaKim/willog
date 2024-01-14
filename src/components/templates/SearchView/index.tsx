import React, { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import MainImage from '../../../assets/MainBanner.jpg';
import Active from '../../../assets/active_like.png';
import SearchIcon from '../../../assets/search.png';
import UnActive from '../../../assets/unActive_like.png';
import colors from '../../../constants/colors';
import { Typo } from '../../atoms';
import {
  BookmarkButton,
  SearchHeader,
  SearchInnerHeader,
  SearchInput,
  SearchItem,
  SearchResultWrap,
  SearchWrap,
} from './styles';
import imageService, { PhotoListResponse } from 'apis/images';
import { ReactComponent as Spinner } from 'assets/spinner.svg';
import { useImageActions, useImage } from 'hooks';

const SearchView: React.FC = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState<number>(1);
  const [photoList, setPhotoList] = useState<PhotoListResponse[]>([]);

  const navigate = useNavigate();
  const { setImages } = useImageActions();
  const { images } = useImage();

  const {
    data: res,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['PhotoSearchList', page],
    queryFn: async () => {
      const response = await imageService.getSearchPhotoList({
        page: 1,
        per_page: 20,
        query: search,
      });
      setPhotoList(response.data.results);
      return response.data;
    },
    enabled: !!search,
  });

  const getPhotoList = useQuery({
    queryKey: ['PhotoList', page],
    queryFn: async () => {
      const response = await imageService.getPhotoList({
        page: 1,
        per_page: 20,
      });
      setPhotoList(response.data);
      return response.data;
    },
    enabled: !search,
  });

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

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
            onClick={refetch}
          />
        </SearchInnerHeader>
      </SearchHeader>

      <SearchResultWrap isEmpty={!photoList}>
        {!isLoading || !getPhotoList.isLoading ? (
          photoList ? (
            photoList.map(item => (
              <SearchItem key={item.id}>
                <img
                  src={item.urls.thumb}
                  alt={item.alt_description}
                  width={'100%'}
                  height={'100%'}
                />
                <BookmarkButton
                  type={'button'}
                  onClick={() => handleBookMark(item)}
                  isSelect={!!images.find(v => v.id === item.id)}
                >
                  <img
                    src={images.find(v => v.id === item.id) ? Active : UnActive}
                    alt="bookmark"
                    width={'15px'}
                    height={'15px'}
                  />
                </BookmarkButton>
              </SearchItem>
            ))
          ) : (
            <Typo size={'BODY2'} color={colors.GRAY1}>
              아무 사진이 없습니다.
            </Typo>
          )
        ) : (
          <Spinner />
        )}
      </SearchResultWrap>
      <div>1</div>
    </SearchWrap>
  );
};

export default SearchView;
