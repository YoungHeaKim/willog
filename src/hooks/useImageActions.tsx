import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearImages, setImages } from 'redux/slices/image';

export default function useProductActions() {
  const dispatch = useDispatch();

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          setImages,
          clearImages,
        },
        dispatch,
      ),
    [dispatch],
  );
  return { ...actions };
}
