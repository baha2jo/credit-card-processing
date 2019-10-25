import { FETCH_CARDS, ADD_CARD } from '../actions/types';

export const initialState = [];

const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CARDS:
      return [...payload];
    case ADD_CARD:
      return [...state, payload];
    default:
      return state;
  }
};

export default cardReducer;
