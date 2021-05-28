/* eslint-disable no-console */
import { useState } from 'react';
import { LIST_ITEMS_PER_PAGE } from '../../constants/list';

function useListPaginated() {
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);
  const [listPaginated, setListPaginated] = useState({
    page: 1,
    perPage: LIST_ITEMS_PER_PAGE,
    totalPages: 1,
    hasPrevious: false,
    hasNext: false,
    items: [],
    totalItems: 0,
  });

  /**
 * Devolve o carrinho atual
 * @param {function} callbackPromise callback que devolve uma promise
 * @returns {void}
*/
  const getData = (callbackPromise) => {
    setShowLoadingComponent(true);
    callbackPromise().then((result) => {
      const { page, perPage, totalPages, hasPrevious, hasNext, items, totalItems } = result;
      setListPaginated({
        page: page ?? 1,
        perPage: perPage ?? LIST_ITEMS_PER_PAGE,
        totalPages: totalPages ?? 1,
        hasPrevious: hasPrevious ?? false,
        hasNext: hasNext ?? false,
        items: items ?? [],
        totalItems: totalItems ?? 0,
      });
      setShowLoadingComponent(false);
    });
  };

  return {
    listPaginated,
    showLoadingComponent,
    getData,
  };
}

export default useListPaginated;
