import { combineReducers, createStore, compose } from 'redux';
import sessionReducer from './session';
import brandReducer from './brands';
import categoriesReducer from './categories';
import provincesReducer from './provinces';
import userReducer from './user';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  userBrand: brandReducer,
  userCat: categoriesReducer,
  userProv: provincesReducer,
});

/* eslint-disable no-underscore-dangle */
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;


const makeStore = (initialState, options) => createStore(
  rootReducer,
  initialState,
  compose(devtools)
);


export default makeStore;
