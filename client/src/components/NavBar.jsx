import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNavBar>
      <h2>NavBar</h2>
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
`;
