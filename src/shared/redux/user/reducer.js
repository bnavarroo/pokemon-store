import TYPES from './actionTypes';

const initialState = { userName: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_USERNAME:
      return { userName: action.userName };

    default:
      return state;
  }
};

export default userReducer;
