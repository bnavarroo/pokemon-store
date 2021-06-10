import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCurrentCart } from '../../../../../../../utilities/functions/cart';
import { STORE_ATTR_REF } from '../../../../../../../constants/stores';
import { CART_ITEM_ATTR_REF } from '../../../../../../../constants/cart';
import { PRODUCT_IMAGE_NOTFOUND } from '../../../../../../../constants/product';

function useCatalogItemsProduct(product) {
  const { store } = useSelector((state) => state.storeReducer);
  const { carts } = useSelector((state) => state.cartReducer);
  const [image, setImage] = useState(PRODUCT_IMAGE_NOTFOUND);
  const [inCart, setInCart] = useState(false);

  const storeRef = store[STORE_ATTR_REF];
  const currentCart = getCurrentCart(carts, storeRef);

  useEffect(() => {
    if (currentCart.items.length) {
      const found = currentCart.items.filter((cartitem) => cartitem.product[CART_ITEM_ATTR_REF] === product[CART_ITEM_ATTR_REF]).length > 0;
      setInCart(found);
    } else {
      setInCart(false);
    }
  }, [currentCart, product]);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setImage(product.image);
    img.onerror = () => setImage(PRODUCT_IMAGE_NOTFOUND);
  }, [product.image]);

  return {
    storeRef,
    inCart,
    image,
  };
}

export default useCatalogItemsProduct;
