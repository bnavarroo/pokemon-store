import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CatalogAPI from '~/shared/api/catalog';
import useListPaginated from '~/utilities/hooks/paginatedListHook';
import { STORE_ATTR_REF } from '~/constants/stores';

function useCatalogItems() {
  const { store } = useSelector((state) => state.storeReducer);
  const { page, filtro } = useParams();

  const { listPaginated, showLoadingComponent, setListPaginatedDataFromCallback } = useListPaginated();
  const handleChangePage = useCallback(() => {
    const pageToGet = page ? parseInt(page, 10) : 1;
    const callback = () => CatalogAPI.GetPagedItems(store[STORE_ATTR_REF], pageToGet, filtro);
    setListPaginatedDataFromCallback(callback);
  }, [filtro, page, setListPaginatedDataFromCallback, store]);

  useEffect(() => {
    handleChangePage();
  }, [handleChangePage]);

  return {
    listPaginated,
    filtro,
    showLoadingComponent,
  };
}

export default useCatalogItems;
