export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PRODUCTS_PENDING = 'PRODUCTS_PENDING';
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';

const API_URL = 'http://localhost:3001/api';

export const getProducts = () => (dispatch) => {
  dispatch({ type: PRODUCTS_PENDING });
  fetch(`${API_URL}/products`)
    .then(r => {
      if (!r.ok) throw new Error('No response from server');
      return r.json();
    })
    .then(rJSON => dispatch({ type: GET_PRODUCTS, payload: rJSON }))
    .catch(error => dispatch({ type: PRODUCTS_ERROR, payload: error.message }));
};
