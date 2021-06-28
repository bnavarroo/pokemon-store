import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '~/shared/redux/cart/actions';
import { getCurrentCart } from '~/utilities/functions/cart';
import { getBaseProduct, getBaseProductImage } from '~/utilities/functions/product';
import { STORE_ATTR_REF } from '~/constants/stores';
import { CART_ITEM_ATTR_REF } from '~/constants/cart';
import { PRODUCT_IMAGE_NOTFOUND } from '~/constants/product';

function useProduct(productRef) {
  const dispatch = useDispatch();

  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const [inCart, setInCart] = useState(false);

  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);
  const imageOnError = (e) => {
    e.target.onerror = null;
    e.target.src = PRODUCT_IMAGE_NOTFOUND;
  };

  const addProductInCart = (product, quantity = 1) => {
    const image = product.image ?? getBaseProductImage(product.id);
    const pokemonBase = getBaseProduct(product);
    dispatch(cartActions.updateItemInCartByStore(storeRef, { product: { ...pokemonBase, image }, quantity }));
  };

  useEffect(() => {
    if (currentCart.items.length) {
      const found = currentCart.items.filter((cartitem) => parseInt(cartitem.product[CART_ITEM_ATTR_REF], 10) === parseInt(productRef, 10)).length > 0;
      setInCart(found);
    } else {
      setInCart(false);
    }
  }, [currentCart, productRef]);

  return {
    storeRef,
    inCart,
    imageOnError,
    addProductInCart,
  };
}

export default useProduct;
