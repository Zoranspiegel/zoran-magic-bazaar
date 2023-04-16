import styled from 'styled-components';

import Card from './Card';

const Deck = () => {
  return (
    <StyledDeck>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledDeck>
  );
};

export default Deck;

const StyledDeck = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  width: 100%;
  margin: 20px 0;
`;
