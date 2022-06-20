/**
 *
 * @
 *
 */
import { createStore } from 'redux';
import counterReducer from './counterReducer.js';
const store = createStore(counterReducer);
export default store;
