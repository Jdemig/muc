import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import nav from './nav';
import map from './map';
import auth from './auth';
import profile from './profile';
import misc from './misc';

export default combineReducers({
  user,
  runtime,
  nav,
  map,
  auth,
  profile,
  misc,
});
