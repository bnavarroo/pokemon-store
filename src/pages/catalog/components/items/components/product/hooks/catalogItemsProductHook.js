import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCurrentCart } from '../../../../../../../utilities/functions/cart';
import { STORE_ATTR_REF } from '../../../../../../../constants/stores';
import { CART_ITEM_ATTR_REF } from '../../../../../../../constants/cart';
import { PRODUCT_IMAGE_NOTFOUND } from '../../../../../../../constants/product';

function useCatalogItemsProduct(product) {
  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const [inCart, setInCart] = useState(false);

  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);
  const imageOnError = (e) => {
    e.target.onerror = null;
    e.target.src = PRODUCT_IMAGE_NOTFOUND;
  };

  useEffect(() => {
    if (currentCart.items.length) {
      const found = currentCart.items.filter((cartitem) => cartitem.product[CART_ITEM_ATTR_REF] === product[CART_ITEM_ATTR_REF]).length > 0;
      setInCart(found);
    } else {
      setInCart(false);
    }
  }, [currentCart, product]);

  return {
    storeRef,
    inCart,
    imageOnError,
  };
}

export default useCatalogItemsProduct;
