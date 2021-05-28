import TYPES from './actionTypes';

const updateItemInCartByStore = (
  storeRef,
  item = {
    product: {},
    quantity: 1,
  },
) => ({
  type: TYPES.UPDATE_ITEM_IN_CART_BY_STORE,
  storeRef,
  item,
});

const removeItemFromCartByStore = (
  storeRef,
  itemRef,
) => ({
  type: TYPES.REMOVE_ITEM_FROM_CART_BY_STORE,
  storeRef,
  itemRef,
});

const clearCart = () => ({ type: TYPES.CLEAR_CART });

const clearCartByStore = (storeRef) => ({
  type: TYPES.CLEAR_CART_BY_STORE,
  content: { storeRef },
});

export default {
  updateItemInCartByStore,
  removeItemFromCartByStore,
  clearCartByStore,
  clearCart,
};
