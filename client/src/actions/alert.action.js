import { SHOW_ALERT } from './types';

export const showAlert = (messages, alertType = 'danger') => dispatch => {
  dispatch({
    type: SHOW_ALERT,
    payload: { alertType, messages }
  });
};
