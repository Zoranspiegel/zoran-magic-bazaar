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
  display: flex;
  justify-content: center;
  position: fixed;
  top: 5px;
  left: 5px;
  right: 5px;
  border: var(--primary-border);
  border-radius: var(--primary-radius);
  padding: 10px;
`;
