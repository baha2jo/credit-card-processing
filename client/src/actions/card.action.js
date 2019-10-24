import { FETCH_CARDS, ADD_CARD, SHOW_ALERT } from './types';

export const fetchCards = () => async dispatch => {
  try {
    const response = await fetch('/api/cards');
    const payload = await response.json();

    dispatch({
      type: FETCH_CARDS,
      payload
    });
  } catch (error) {}
};

export const addCard = params => async dispatch => {
  try {
    const rawResponse = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    const payload = await rawResponse.json();
    if (payload.errors) throw payload.errors;

    dispatch({
      type: ADD_CARD,
      payload
    });

    dispatch({
      type: SHOW_ALERT,
      payload: {
        alertType: 'success',
        messages: [{ msg: 'Card added successfully 🎇' }]
      }
    });
  } catch (errors) {
    dispatch({
      type: SHOW_ALERT,
      payload: { messages: errors }
    });
  }
};
