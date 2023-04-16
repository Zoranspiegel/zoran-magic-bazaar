import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from './Card';

const Deck = () => {
  const products = useSelector(state => state.products);

  return (
    <StyledDeck>
      {products?.map(p => <Card key={p._id} product={p} />)}
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
