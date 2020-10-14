import { combineReducers } from 'redux';

import form from '../reducers/form';
import basic from './basic';
import network from '../reducers/network';

export default combineReducers({
  form,
  basic,
  network,
});
