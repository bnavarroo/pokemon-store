import { CART_ITEM_ATTR_REF } from '~/constants/cart';
import { STORES, STORE_ATTR_REF } from '~/constants/stores';

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
 * Retorna os items do carrinho "atual" atualizados após um item ser adicionado/atualizado
 * @param {string} currentCart
 * @param {array} item
 * @returns {array} { items: array, totalCart: number, totalItems: number }
*/
export function getNewCartOnUpdate(currentCart, item) {
  const { items } = currentCart;
  let { totalCart, totalItems } = currentCart;
  const { product, quantity } = item;
  const exists = currentCart.items.filter((cartItem) => cartItem.product[CART_ITEM_ATTR_REF] === product[CART_ITEM_ATTR_REF]).length > 0;

  if (!exists) {
    items.push(item);
  } else {
    const itemsId = currentCart.items.map((cartItem) => cartItem.product[CART_ITEM_ATTR_REF]);
    const itemIndex = itemsId.indexOf(product[CART_ITEM_ATTR_REF]);
    const newItem = items[itemIndex];
    const newQuantity = newItem.quantity + quantity;
    newItem.quantity = newQuantity > 0 ? newQuantity : 0;
    items[itemIndex] = newItem;
  }

  // Tratativa de segurança para não permitir produtos com quantidade 0 no carrinho
  const newItems = items.filter((cartItem) => cartItem.quantity > 0);

  totalItems += quantity;
  totalCart += (product.price * quantity);

  return { ...currentCart, items: newItems, totalCart, totalItems };
}

/**
 * Retorna os items do carrinho "atual" atualizados após um item ser removido
 * @param {string} currentCart
 * @param {string} ref
 * @returns {array} { items: array, totalCart: number, totalItems: number }
*/
export function getNewCartOnRemove(currentCart, ref) {
  const { items } = currentCart;
  const item = items.filter((cartItem) => cartItem.product[CART_ITEM_ATTR_REF] === ref)[0];
  item.quantity *= (-1);

  return getNewCartOnUpdate(currentCart, item);
}
