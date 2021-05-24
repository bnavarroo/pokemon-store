import { combineReducers, createStore } from 'redux';
import rootReducer from './reducers';
import { saveStateToSessionStorage, loadStateFromSessionStorage } from './storage';

const Store = createStore(combineReducers({ ...rootReducer }), loadStateFromSessionStorage());

Store.subscribe(() => saveStateToSessionStorage(Store.getState()));

export default Store;
