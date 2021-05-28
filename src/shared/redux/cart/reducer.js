import TYPES from './actionTypes';
import { getInitCarts, getNewCartOnUpdate, getNewCartOnRemove } from './functions';
import { getCurrentCart } from '../../../utilities/functions/cart';
import { CART_ATTR_REF } from '../../../constants/cart';

const initialState = { carts: getInitCarts() };

const cartReducer = (state = initialState, action) => {
  let currentCart;
  let newCart;
  const nextState = { ...state };
  const nextStateCart = nextState.carts ?? [];

  // sempre que uma acao for aplicada a um carrinho especifico
  if (action.storeRef) {
    currentCart = getCurrentCart(nextStateCart, action[CART_ATTR_REF]);
  }

  switch (action.type) {
    case TYPES.UPDATE_ITEM_IN_CART_BY_STORE:
      newCart = getNewCartOnUpdate(currentCart, action.item);
      nextStateCart[currentCart.cartIndex] = newCart;
      nextState.carts = nextStateCart;
      return nextState;

    case TYPES.REMOVE_ITEM_FROM_CART_BY_STORE:
      newCart = getNewCartOnRemove(currentCart, action.itemRef);
      nextStateCart[currentCart.cartIndex] = newCart;
      nextState.carts = nextStateCart;
      return nextState;

    case TYPES.CLEAR_CART:
      return { carts: getInitCarts() };

    default:
      return state;
  }
};

export default cartReducer;
