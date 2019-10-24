import { combineReducers } from 'redux';
import cardReducer from './card.reducer';
import alertReducer from './alert.reducer';

const rootReducer = combineReducers({
  cards: cardReducer,
  alert: alertReducer
});

export default rootReducer;
