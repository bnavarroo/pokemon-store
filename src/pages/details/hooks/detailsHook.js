import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductAPI from '../../../shared/api/product';

function useDetails() {
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);
  const [productDetails, setProdutoDetails] = useState({});
  const { idProduto } = useParams();

  useEffect(() => {
    async function getFromApiAsync() {
      setShowLoadingComponent(true);
      const result = await ProductAPI.GetProduct(idProduto);
      setProdutoDetails(result);
      setShowLoadingComponent(false);
    }
    getFromApiAsync();
  }, [idProduto]);

  return {
    productDetails,
    showLoadingComponent,
  };
}

export default useDetails;
