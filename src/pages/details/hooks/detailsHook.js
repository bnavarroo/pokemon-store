import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '~/utilities/hooks/productHook';
import ProductAPI from '~/shared/api/product';

function useDetails() {
  const { refProduto } = useParams();
  const { storeRef, inCart, imageOnError, addProductInCart } = useProduct(refProduto);
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);
  const [productDetails, setProdutoDetails] = useState({});

  const addProductInCartFromDetail = () => { addProductInCart(productDetails); };

  useEffect(() => {
    async function getFromApiAsync() {
      setShowLoadingComponent(true);
      const result = await ProductAPI.GetProduct(refProduto);
      setProdutoDetails(result);
      setShowLoadingComponent(false);
    }
    getFromApiAsync();
  }, [refProduto]);

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
