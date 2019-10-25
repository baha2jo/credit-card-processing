import alertReducer, { initialState } from '../alert.reducer';
import { SHOW_ALERT } from 'actions/types';

describe('Alert reducer', () => {
  it(`should return initial state if action type doesn't exist`, () => {
    expect(alertReducer(initialState, { type: '', payload: {} })).toEqual(
      initialState
    );
  });
  it(`should handle SHOW_ALERT `, () => {
    const mockPayload = { alertType: 'danger', messages: ['Hello'] };
    expect(
      alertReducer(initialState, {
        type: SHOW_ALERT,
        payload: mockPayload
      })
    ).toEqual(mockPayload);
  });
});
