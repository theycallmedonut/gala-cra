import { combineReducers } from 'redux';

import form from '../reducers/form';
import cards from '../reducers/cards';
import network from '../reducers/network';

export default combineReducers({
  form,
  cards,
  network,
});
