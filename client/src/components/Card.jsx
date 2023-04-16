import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <StyledCard>
      <NavLink className='link'>
        <div className='shell'>
          <div className='title'>
            <h3>Card</h3>
          </div>
          <div className='body'>
            <p>Price: $<span>999</span></p>
            <p>Stock: <span>99</span></p>
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
    height: 300px;
  }

  .title {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;
