/* eslint-disable no-plusplus */
import BaseApi from '../index';
import Http from '../../../utilities/http';
import { isNullOrUndefined, generateValueByIdAndType } from '../../../utilities/functions/general';
import { urlParamToString } from '../../../utilities/converters';

import URL_BASE_API from '../constants';
import { LIST_ITEMS_PER_PAGE } from '../../../constants/list';

const SETTINGS = {
  url: `${URL_BASE_API}/type`,
  keyItems: 'pokemon',
  image: {
    strReplace: '{id}',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png',
  },
};

export default class CatalogAPI extends BaseApi {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  static GetItems(typeId) {
    const url = `${SETTINGS.url}/${typeId}`;
    return Http.Get(url).then((result) => {
      const items = result[SETTINGS.keyItems];

      const response = items.map((item) => {
        const pokemon = item[SETTINGS.keyItems];
        const id = pokemon.url.match(/\/(\d+)+[/]?/g)[0].replace(/\//g, '');
        const image = SETTINGS.image.url.replace(SETTINGS.image.strReplace, id);

        return { id, name: pokemon.name, price: generateValueByIdAndType(id), image };
      });

      return response;
    });
  }

  static GetItemsWithPagination(typeId, page = 1, filter = null, perPage = LIST_ITEMS_PER_PAGE) {
    return CatalogAPI.GetItems(typeId).then((items) => {
      const filteredItems = isNullOrUndefined(filter)
        ? items
        : items.filter((item) => urlParamToString(item.name.toUpperCase()).indexOf(urlParamToString(filter.toUpperCase())) !== -1);

      const totalPages = Math.ceil(filteredItems.length / perPage);
      const init = (page - 1) * perPage;
      const end = page * perPage;

      return {
        page,
        perPage,
        totalPages,
        hasPrevious: page > 1,
        hasNext: page < totalPages,
        items: filteredItems.slice(init, end),
        totalItems: items.length,
      };
    });
  }
}
