import cardReducer, { initialState } from '../card.reducer';
import { FETCH_CARDS } from 'actions/types';

const card = {
  cardNumber: '4970856264139166',
  expiryDate: '12/21',
  limit: '122',
  name: '3213',
  _id: '2QCfp3SjZ7bMo1gi'
};

describe('Alert reducer', () => {
  it(`should return initial state if action type doesn't exist`, () => {
    expect(cardReducer(initialState, { type: '', payload: {} })).toEqual(
      initialState
    );
  });
  it(`should handle FETCH_CARDS `, () => {
    const mockPayload = [card];
    expect(
      cardReducer(initialState, {
        type: FETCH_CARDS,
        payload: mockPayload
      })
    ).toEqual(mockPayload);
  });
});

// We should test ADD_CARD type
