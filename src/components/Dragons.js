import { useDispatch, useSelector } from 'react-redux';
import { reservation } from '../redux/dragons/dragonSlice';
import '../styles/dragons.css';

function Dragons() {
  const dispatch = useDispatch();
  const { dragons, isLoading, error } = useSelector((store) => store.dragons);

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
                <p className="dragon-type">
                  {dragon.reserved ? <span className="reserved">Reserved</span> : ''}
                  {dragon.type}
                </p>
                <button className={dragon.reserved ? 'cancel' : 'dragon-button'} id="btn" onClick={() => dispatch(reservation(dragon.id))} type="button">
                  {
                    dragon.reserved
                      ? 'Cancel Reservation'
                      : 'Reserve'
                  }
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Dragons;
