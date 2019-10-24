import { SHOW_ALERT } from '../actions/types';

const initialState = { alertType: '', messages: [] };

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return { alertType: payload.alertType, messages: [...payload.messages] };
    default:
      return state;
  }
};

export default alertReducer;
