import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, cleanDetails } from '../redux/actions';

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector(state => state.details);

  useEffect(() => {
    dispatch(getDetails(params.id));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(cleanDetails());
    };
  }, []);

  return (
    <StyledDetails>
      <div className='shell'>
        <div className='title'>
          <h1>{details.name && details.name}</h1>
        </div>
        <img src={details.name && details.img} alt={`${details.name && details.name} image`} />
        <div className='body'>
          <h3>{details.category}</h3>
          <p>{details.name && details.description}</p>
          <p>Price: <span>${details.name && details.price}</span></p>
          <p>Stock: <span>{details.name && details.inStock}</span></p>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;

const StyledDetails = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .shell {
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: var(--primary-border);
    border-radius: var(--primary-radius);
    overflow: hidden;
    padding: 30px 0;
  }

  .title {
    text-align: center;
  }

  img {
    height: 60%;
    border-radius: 10%;
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    width: 50%;
  }

  .body h3, span {
    color: yellow;
  }
`;
