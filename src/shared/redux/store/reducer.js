import TYPES from './actionTypes';
import { getStoreDefault, getStoreByRef } from '~/utilities/functions/store';

const initialState = { store: getStoreDefault() };

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_STORE_SELECTED:
      return {
        ...state,
        store: getStoreByRef(action.storeRef),
      };

    default:
      return state;
  }
};

export default storeReducer;
