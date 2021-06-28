import { useState, useCallback } from 'react';
import { LIST_ITEMS_PER_PAGE } from '~/constants/list';

const initialList = {
  page: 1,
  perPage: LIST_ITEMS_PER_PAGE,
  totalPages: 1,
  hasPrevious: false,
  hasNext: false,
  items: [],
  totalItems: 0,
};

function useListPaginated() {
  const [showLoadingComponent, setShowLoadingComponent] = useState(true);
  const [listPaginated, setListPaginated] = useState(initialList);

  /**
  * Executa a função que recupera os dados e atualiza o estado de listPaginated de acordo com o retorno
  * @param {function} callback Função que DEVE RETORNAR UMA PROMISE com os dados para atualização do estado de listPaginated
  * @returns {void}
  */
  const setListPaginatedDataFromCallback = useCallback(async (callback) => {
    setShowLoadingComponent(true);
    const result = await callback();
    const { page, perPage, totalPages, hasPrevious, hasNext, items, totalItems } = result;
    setListPaginated({
      page: page ?? initialList.page,
      perPage: perPage ?? initialList.perPage,
      totalPages: totalPages ?? initialList.totalPages,
      hasPrevious: hasPrevious ?? initialList.hasPrevious,
      hasNext: hasNext ?? initialList.hasNext,
      items: items ?? initialList.items,
      totalItems: totalItems ?? initialList.totalItems,
    });
    setShowLoadingComponent(false);
  }, []);

  return {
    listPaginated,
    showLoadingComponent,
    setListPaginatedDataFromCallback,
  };
}

export default useListPaginated;
