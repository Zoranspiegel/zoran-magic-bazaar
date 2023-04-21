import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import Card from './Card';
import Loading from './Loading';
import Error from './Error';

const Deck = () => {
  const PER_PAGE = 10;
  const [page, setPage] = useState(0);
  const products = useSelector(state => state.products.slice(page * PER_PAGE, (page * PER_PAGE) + PER_PAGE));
  const status = useSelector(state => state.products_status);

  const handlePage = (pg) => {
    setPage(pg);
  };

  return (
    <StyledDeck>
      <Pagination handlePage={handlePage} perPage={PER_PAGE} page={page} />
      {status.loading === 'pending' && <Loading />}
      {status.loading === 'rejected' && <Error error={status.error} />}
      <div className='cards'>
        {products?.map(p => <Card key={p._id} product={p} />)}
      </div>
      <Pagination handlePage={handlePage} perPage={PER_PAGE} page={page} />
    </StyledDeck>
  );
};

export default Deck;

const StyledDeck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin: 20px 0;
  }
`;
