/* eslint-disable camelcase */
import Http from '~/utilities/http';
import { isNullOrUndefined } from '~/utilities/functions/general';
import { getBaseProduct } from '~/utilities/functions/product';
import URL_BASE_API from '~/shared/api/constants';
import LANGUAGE from '~/_config/language';

const urlBase = `${URL_BASE_API}/pokemon`;
const mainImageObjKey = 'official-artwork';

export default class ProductAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  /**
  * Retorna as informações completas do produto/pokemón
  * @param {int} id Id do pokemon
  * @returns {object} { id: number, name: string, price: number, abilities: array, images: object };
  */
  static async GetProduct(id) {
    const url = `${urlBase}/${id}`;
    const result = await Http.Get(url);
    const abilities = await ProductAPI.GetAbilities(result.abilities);

    const pokemonBase = getBaseProduct(result);

    return {
      ...pokemonBase,
      baseExperience: result.base_experience,
      moves: result.moves.map((move) => move.move.name),
      abilities,
      images: {
        main: result.sprites.other[mainImageObjKey].front_default,
        thumbs: Object.values(result.sprites).filter((sprite) => !isNullOrUndefined(sprite) && typeof sprite === 'string'),
      },
    };
  }

  /**
  * Retorna as informações de habilidade do produto/pokemón
  * @param {array} arrayOfAbilities array com as informações referentes as habilidades
  * @returns {object} { id: number, name: string, effect_entries: array };
  */
  static async GetAbilities(arrayOfAbilities) {
    const abilities = await Promise.all(arrayOfAbilities.map(async (item) => {
      const details = await Http.Get(item.ability.url);
      const { id, name } = details;
      const effect_entries = details.effect_entries
        .filter((effectFilter) => effectFilter.language.name === LANGUAGE.name)
        .map((effectEntry) => ({ effect: effectEntry.effect, short_effect: effectEntry.short_effect }));

      return { id, name, effect_entries };
    }));

    return abilities;
  }
}
