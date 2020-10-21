import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import moviesReducer, { initialState } from './movies-reducer';


const middlewares = [thunk];
const store = createStore(moviesReducer, initialState, applyMiddleware(...middlewares));

export default store;
