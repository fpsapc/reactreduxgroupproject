import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonSlice';
import '../styles/dragons.css';

function Dragons() {
  const dispatch = useDispatch();
  const { dragons, isLoading, error } = useSelector((store) => store.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div>Error: Connection is bad!</div>
      </>
    );
  }

  return (
    <>
      <div className="dragons">
        {dragons.map((dragon) => (
          <>
            <div key={dragon.id} className="dragon-container">
              <div className="dragon-img-container">
                <img className="dragon-img" src={dragon.image[0]} alt="dragon view" />
              </div>
              <div className="dragon-info">
                <p className="dragon-name">{dragon.name}</p>
                <p className="dragon-type">{dragon.type}</p>
                <button className="dragon-button" type="button">Reserve Dragon</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Dragons;
