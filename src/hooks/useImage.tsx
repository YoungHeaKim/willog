import { useSelector } from 'react-redux';
import { RootState } from 'redux/store/configStore';

export default function useImage() {
  const images = useSelector((state: RootState) => state.images.images);

  return {
    images,
  };
}
