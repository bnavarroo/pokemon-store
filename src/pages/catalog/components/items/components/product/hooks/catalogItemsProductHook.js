import useProduct from '../../../../../../../utilities/hooks/productHook';
import { CART_ITEM_ATTR_REF } from '../../../../../../../constants/cart';

function useCatalogItemsProduct(product) {
  const { storeRef, inCart, imageOnError, addProductInCart } = useProduct(product[CART_ITEM_ATTR_REF]);
  const addProductInCartFromCatalog = () => addProductInCart(product);

  return {
    storeRef,
    inCart,
    imageOnError,
    addProductInCartFromCatalog,
  };
}

export default useCatalogItemsProduct;
