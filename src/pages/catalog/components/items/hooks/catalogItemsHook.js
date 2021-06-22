import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import CatalogAPI from '../../../../../shared/api/catalog';
import Sitemap from '../../../../../_config/sitemap';
import { isNullOrUndefined } from '../../../../../utilities/functions/general';
import useListPaginated from '../../../../../utilities/hooks/paginatedListHook';
import { STORE_ATTR_REF } from '../../../../../constants/stores';

function useCatalogItems() {
  const { store } = useSelector((state) => state.storeReducer);
  const { filtro } = useParams();
  const history = useHistory();
  const usePreviousStore = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = isNullOrUndefined(value) ? {} : value;
    });
    return ref.current;
  };
  const prevStore = usePreviousStore(store);

  const { listPaginated, showLoadingComponent, setListPaginatedDataFromCallback } = useListPaginated();
  const handleChangePage = (page) => {
    const callback = () => CatalogAPI.GetPagedItems(store[STORE_ATTR_REF], page, filtro);
    setListPaginatedDataFromCallback(callback);
  };

  useEffect(() => {
    if (isNullOrUndefined(prevStore)
      || (prevStore[STORE_ATTR_REF] !== store[STORE_ATTR_REF] && isNullOrUndefined(filtro))
      || prevStore[STORE_ATTR_REF] === store[STORE_ATTR_REF]) {
      handleChangePage(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtro, store]);

  useEffect(() => {
    if (!isNullOrUndefined(prevStore) && (prevStore[STORE_ATTR_REF] !== store[STORE_ATTR_REF])) history.replace(Sitemap.CatalogPage.path);
  }, [history, prevStore, store]);

  return {
    listPaginated,
    filtro,
    showLoadingComponent,
    handleChangePage,
  };
}

export default useCatalogItems;
