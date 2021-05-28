import { CART_ATTR_REF, CART_ITEM_ATTR_REF } from '../../../constants/cart';
import { STORES, STORE_ATTR_REF } from '../../../constants/stores';

/**
 * Retorna todos os carrinhos disponíveis
 * @returns {array} [{storeRef: string, items: array, totalCart: number}]
*/
export function getInitCarts() {
  const carts = [];
  STORES.forEach((store) => {
    carts.push({
      storeRef: store[STORE_ATTR_REF],
      items: [],
      totalCart: 0,
      totalItems: 0,
    });
  });

  return carts;
}

/**
 * Retorna o carrinho "atual", que está sendo considerado pela aplicação
 * @param {string} storeRef
 * @param {array} nextStateCart
 * @returns {array} {storeRef: string, items: array, totalCart: number, cartIndex: number}
*/
export function getCurrentCart(storeRef, nextStateCart) {
  let cartIndex;
  const [cart] = nextStateCart.filter((cartState) => cartState[CART_ATTR_REF] === storeRef);
  nextStateCart.forEach((cartItem, index) => {
    if (cartItem[CART_ATTR_REF] === storeRef) {
      cartIndex = index;
    }
  });

  return { ...cart, cartIndex };
}

/**
 * Retorna os items do carrinho "atual" atualizados após um item ser adicionado/atualizado
 * @param {string} currentCart
 * @param {array} item
 * @returns {array} { items: array, totalCart: number, totalItems: number }
*/
export function getNewCartOnUpdate(currentCart, item) {
  const { product, quantity } = item;
  let newItems;

  // Validar se o produto já existe no carrinho atual
  const exists = currentCart.items.filter((cartItem) => cartItem.product.id === product.id).length > 0;
  newItems = currentCart.items;
  if (!exists) newItems.push(item);

  let totalCart = 0;
  let totalItems = 0;
  newItems = newItems.map((cartItem) => {
    let newQuantity = exists && cartItem.product.id === product.id ? cartItem.quantity + quantity : cartItem.quantity;
    if (newQuantity < 0) newQuantity = 0;
    const { price } = cartItem.product;
    totalCart += (price * newQuantity);
    totalItems += newQuantity;
    return {
      product: cartItem.product,
      quantity: newQuantity,
    };
  }).filter((newCartItem) => newCartItem.quantity > 0);

  return { storeRef: currentCart.storeRef, items: newItems, totalCart, totalItems };
}

/**
 * Retorna os items do carrinho "atual" atualizados após um item ser removido
 * @param {string} currentCart
 * @param {string} ref
 * @returns {array} { items: array, totalCart: number, totalItems: number }
*/
export function getNewCartOnRemove(currentCart, ref) {
  let { totalCart, totalItems } = currentCart;

  const newItems = currentCart.items.map((cartItem) => {
    if (cartItem.product[CART_ITEM_ATTR_REF] === ref) {
      totalCart -= (cartItem.product.price * cartItem.quantity);
      totalItems -= cartItem.quantity;
    }
    return cartItem;
  }).filter((cartItem) => cartItem.product[CART_ITEM_ATTR_REF] !== ref);

  return { storeRef: currentCart.storeRef, items: newItems, totalCart, totalItems };
}
