import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '~/utilities/hooks/productHook';
import ProductAPI from '~/shared/api/product';
import { getStoreByRef } from '~/utilities/functions/store';

function useDetails() {
  const { refProduto } = useParams();
  const { storeRef, inCart, imageOnError, addProductInCart } = useProduct(refProduto);
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);
  const [productDetails, setProdutoDetails] = useState({});
  const store = getStoreByRef(storeRef);

  const addProductInCartFromDetail = () => { addProductInCart(productDetails); };

  useEffect(() => {
    async function getFromApiAsync() {
      setShowLoadingComponent(true);
      const result = await ProductAPI.GetProduct(refProduto);
      const foundInStore = result.types.includes(store.type);
      if (foundInStore) {
        setProdutoDetails(result);
      }
      setShowLoadingComponent(false);
    }
    getFromApiAsync();
  }, [refProduto, store.type]);

  return {
    storeRef,
    inCart,
    imageOnError,
    addProductInCartFromDetail,
    productDetails,
    showLoadingComponent,
  };
}

export default useDetails;
