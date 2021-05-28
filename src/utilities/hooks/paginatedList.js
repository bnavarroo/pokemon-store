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
 * @param {object} carts
 * @param {string} storeRef
 * @returns {array} {storeRef: string, items: array, totalCart: number, cartIndex: number}
*/
  const getData = (callbackPromise) => {
    setShowLoadingComponent(true);
    callbackPromise().then((result) => {
      setListPaginated(result);
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
