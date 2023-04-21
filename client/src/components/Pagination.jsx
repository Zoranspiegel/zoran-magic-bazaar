import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ perPage, handlePage, page }) => {
  const pagesNum = useSelector((state) => Math.floor(state.products.length / perPage));
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const arrayX = [];
    for (let i = 1; i <= pagesNum; i++) {
      arrayX.push(i);
    }
    setPages(arrayX);
  }, [pagesNum]);

  return (
    <StyledPagination>
      <button onClick={() => handlePage(page - 1)} style={{ visibility: page === 0 && 'hidden' }} className='arrows'>&#9664;</button>
      {pages.map((p, i) =>
        <button
          key={i}
          onClick={() => handlePage(i)}
          className={
            page === i
              ? 'activePg'
              : null
          }
        >
          {p}
        </button>)}
      <button onClick={() => handlePage(page + 1)} style={{ visibility: page === pagesNum - 1 && 'hidden' }} className='arrows'>&#9654;</button>
    </StyledPagination>
  );
};

export default Pagination;

const StyledPagination = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px;

  button {
    background-color: black;
    border: var(--primary-border);
    border-radius: 5px;
    padding: 2px 8px;
    color: var(--primary-text-color);
    font-size: 15px;
    font-weight: 800;
    font-family: inherit;
    user-select: none;
    cursor: pointer;
  }

  .activePg {
    background-color: var(--primary-text-color);
    color: black;
  }
  
  .arrows:active {
    background-color: var(--primary-text-color);
    color: black;    
  }
`;
