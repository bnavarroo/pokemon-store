import TYPES from './actionTypes';

const setStoreSelected = (storeRef) => ({
  type: TYPES.SET_STORE_SELECTED,
  storeRef,
});

export default { setStoreSelected };
