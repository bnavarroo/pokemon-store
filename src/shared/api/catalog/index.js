/* eslint-disable no-plusplus */
import Http from '../../../utilities/http';
import { isNullOrUndefined, generateValueByIdAndType } from '../../../utilities/functions/general';
import { urlParamToString } from '../../../utilities/converters';
import URL_BASE_API from '../constants';
import { LIST_ITEMS_PER_PAGE } from '../../../constants/list';
import { PRODUCT_IMAGE_SETTINGS } from '../../../constants/product';

const urlBase = `${URL_BASE_API}/type`;
const keyItems = 'pokemon';

export default class CatalogAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  /**
  * Retorna lista de pokemóns por tipo
  * @param {int} typeId Tipo do pokemon/loja
  * @param {string} filter? filtro por nome
  * @returns {object} { id: int, name: string, price: string, image: string};
  */
  static async GetItems(typeId, filter = null) {
    const url = `${urlBase}/${typeId}`;
    const result = await Http.Get(url);

    const items = isNullOrUndefined(filter)
      ? result[keyItems]
      : result[keyItems].filter((item) => urlParamToString(item[keyItems].name.toUpperCase()).indexOf(urlParamToString(filter.toUpperCase())) !== -1);

    const response = items.map((item) => {
      const pokemon = item[keyItems];
      const id = pokemon.url.match(/\/(\d+)+[/]?/g)[0].replace(/\//g, '');
      const image = PRODUCT_IMAGE_SETTINGS.url.replace(PRODUCT_IMAGE_SETTINGS.strReplace, id);

      return { id, name: pokemon.name, price: generateValueByIdAndType(id), image };
    });

    return response;
  }

  /**
  * Retorna lista de pokemóns por tipo de maneira paginada
  * @param {int} typeId Tipo do pokemon/loja
  * @param {int} page? número da página
  * @param {string} filter? filtro por nome
  * @param {int} perPage? quantidade de items por página
  * @returns {object} { page: int, perPage: int, totalPages: int, hasPrevious: boolean, hasNext: boolean, items: array<object>, totalItems: int };
  */
  static async GetPagedItems(typeId, page = 1, filter = null, perPage = LIST_ITEMS_PER_PAGE) {
    const items = await CatalogAPI.GetItems(typeId, filter);
    const totalPages = Math.ceil(items.length / perPage);
    const init = (page - 1) * perPage;
    const end = page * perPage;

    return {
      page,
      perPage,
      totalPages,
      hasPrevious: page > 1,
      hasNext: page < totalPages,
      items: items.slice(init, end),
      totalItems: items.length,
    };
  }
}
