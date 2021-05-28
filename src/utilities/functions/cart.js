import { CART_ATTR_REF } from '../../constants/cart';

/**
 * Devolve o carrinho atual
 * @param {object} carts
 * @param {string} storeRef
 * @returns {array} {storeRef: string, items: array, totalCart: number, cartIndex: number}
*/
export function getCurrentCart(carts, storeRef) {
  const [cart] = carts.filter((cartState) => cartState[CART_ATTR_REF] === storeRef);
  const cartIndex = carts.indexOf(cart);

  return { ...cart, cartIndex };
}

export default {};
