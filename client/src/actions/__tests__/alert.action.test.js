import { showAlert } from '../alert.action';
import { SHOW_ALERT } from '../types';

describe('Alert action', () => {
  it('should create an action to show alert', () => {
    const payload = {
      alertType: 'danger',
      messages: 'Something went wrong'
    };
    const expectedActions = [
      {
        type: SHOW_ALERT,
        payload
      }
    ];

    const store = mockStore({});
    store.dispatch(showAlert(payload.messages, payload.alertType));
    expect(JSON.stringify(store.getActions())).toBe(
      JSON.stringify(expectedActions)
    );
  });
});
