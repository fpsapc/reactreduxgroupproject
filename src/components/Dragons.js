import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonSlice';

function Dragons() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <>
      <div>Dragon</div>
    </>
  );
}

export default Dragons;
