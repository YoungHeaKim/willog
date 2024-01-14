import React from 'react';
import Active from '../../../assets/active_like.png';
import UnActive from '../../../assets/unActive_like.png';
import { BookmarkButton, ItemView } from './styles';
import { PhotoListResponse } from 'apis/images';
import { useImage, useImageActions } from 'hooks';

interface Props {
  item: PhotoListResponse;
}

const ImageItem = ({ item }: Props) => {
  const { images } = useImage();
  const { setImages } = useImageActions();

  const handleBookMark = (v: PhotoListResponse) => {
    if (images.find(image => image.id === v.id)) {
      const filterImages = images.filter(image => image.id !== v.id);
      setImages(filterImages);
    } else {
      const pushImages = [...images, v];
      setImages(pushImages);
    }
  };

  return (
    <ItemView>
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
    </ItemView>
  );
};

export default ImageItem;
