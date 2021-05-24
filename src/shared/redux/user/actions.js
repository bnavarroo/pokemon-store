import TYPES from './actionTypes';

const setName = (userName = '') => ({
  type: TYPES.SET_USERNAME,
  userName,
});

export default { setName };
