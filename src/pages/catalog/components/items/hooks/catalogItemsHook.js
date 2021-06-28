import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CatalogAPI from '~/shared/api/catalog';
import useListPaginated from '~/utilities/hooks/paginatedListHook';
import { STORE_ATTR_REF } from '~/constants/stores';

function useCatalogItems() {
  const { store } = useSelector((state) => state.storeReducer);
  const { filtro } = useParams();

  const { listPaginated, showLoadingComponent, setListPaginatedDataFromCallback } = useListPaginated();
  const handleChangePage = useCallback((page) => {
    const callback = () => CatalogAPI.GetPagedItems(store[STORE_ATTR_REF], page, filtro);
    setListPaginatedDataFromCallback(callback);
  }, [filtro, setListPaginatedDataFromCallback, store]);

  useEffect(() => {
    handleChangePage(1);
  }, [handleChangePage]);

  return {
    listPaginated,
    filtro,
    showLoadingComponent,
    handleChangePage,
  };
}

export default useCatalogItems;
