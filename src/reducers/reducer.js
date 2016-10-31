import { combineReducers } from 'redux';
import notifications from './notifications';

const reducer = combineReducers({
  notifications,
});

export default reducer;
