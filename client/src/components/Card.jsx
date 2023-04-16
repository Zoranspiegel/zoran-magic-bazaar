import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <StyledCard>
      <NavLink className='link'>
        <div className='shell'>
          <div className='title'>
            <h3>{product.name}</h3>
          </div>
          <img src={product.img} alt={`${product.name} image`} />
          <div className='body'>
            <p>Price: <span>${product.price}</span></p>
            <p>Stock: <span>{product.inStock}</span></p>
          </div>
        </div>
      </NavLink>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  .link {
    text-decoration: none;
    color: var(--primary-text-color);
  }

  .shell {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: var(--primary-border);
    border-radius: var(--primary-radius);
    width: 300px;
    height: 380px;
  }

  .title {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }

  img {
    object-fit: cover;
    overflow: hidden;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;
