import { combineReducers, createStore } from 'redux';
import rootReducer from '~/_config/reducers';
import { saveStateToSessionStorage, loadStateFromSessionStorage } from '~/_config/storage';

const Store = createStore(combineReducers({ ...rootReducer }), loadStateFromSessionStorage());

Store.subscribe(() => saveStateToSessionStorage(Store.getState()));

export default Store;
