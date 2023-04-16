import {
  GET_PRODUCTS,
  PRODUCTS_PENDING,
  PRODUCTS_ERROR
} from '../actions';

const initialState = {
  products: [],
  products_status: {
    loading: 'idle',
    error: null
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_PENDING:
      return {
        ...state,
        products_status: { ...state.products_status, loading: 'pending' }
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        products_status: { ...state.products_status, loading: 'succeeded' }
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        products_status: { loading: 'rejected', error: action.payload }
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
