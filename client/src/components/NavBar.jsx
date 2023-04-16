import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavLink to='/home' className='link'>
        <h2>Home</h2>
      </NavLink>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div`
  z-index: 9999;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 5px;
  left: 5px;
  right: 5px;
  border: var(--primary-border);
  border-radius: var(--primary-radius);
  background-color: black;
  padding: 10px;

  .link {
    text-decoration: none;
    color: var(--primary-text-color);
  }

  .link:hover {
    color: yellow;
  }
`;
