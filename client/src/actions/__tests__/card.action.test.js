import { fetchCards, addCard } from '../card.action';
import { FETCH_CARDS, ADD_CARD } from '../types';

const card = {
  cardNumber: '4970856264139166',
  expiryDate: '12/21',
  limit: '122',
  name: '3213',
  _id: '2QCfp3SjZ7bMo1gi'
};

describe('Card actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it('should create an action to show alert', async () => {
    const expectedActions = [
      {
        type: FETCH_CARDS,
        payload: [{ ...card }]
      }
    ];

    const store = mockStore({ cards: [] });
    await fetch.mockResponseOnce(JSON.stringify([{ ...card }]));
    await store.dispatch(fetchCards());
    expect(JSON.stringify(store.getActions())).toBe(
      JSON.stringify(expectedActions)
    );
  });
});

// We also should add test for add new card
