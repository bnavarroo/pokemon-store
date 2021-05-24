import Http from '../../utilities/http';
import { generateValueByIdAndType } from '../../utilities/functions/general';
import URL_BASE_API from './constants';

const SETTINGS = {
  url: `${URL_BASE_API}/type`,
  keyItems: 'pokemon',
  image: {
    strReplace: '{id}',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png',
  },
};

export default class CatalogAPI {
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
}
