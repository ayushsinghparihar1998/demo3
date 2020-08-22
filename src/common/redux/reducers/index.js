import { combineReducers } from 'redux';
import userReducer from './reducerUser';

export default combineReducers({
  user: userReducer
});
