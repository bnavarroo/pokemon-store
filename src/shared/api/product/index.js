/* eslint-disable camelcase */
import Http from '../../../utilities/http';
import { isNullOrUndefined } from '../../../utilities/functions/general';
import URL_BASE_API from '../constants';

const urlBase = `${URL_BASE_API}/pokemon`;
const mainImageObjKey = 'official-artwork';

export default class ProductAPI {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  static async GetProduct(id) {
    const url = `${urlBase}/${id}`;
    const result = await Http.Get(url);
    const abilities = await ProductAPI.GetAbilities(result.abilities);

    return {
      id: result.id,
      name: result.name,
      abilities,
      images: {
        main: result.sprites.other[mainImageObjKey].front_default,
        thumbs: Object.values(result.sprites).filter((sprite) => !isNullOrUndefined(sprite) && typeof sprite === 'string'),
      },
    };
  }

  static async GetAbilities(arrayOfAbilities) {
    const abilities = await Promise.all(arrayOfAbilities.map(async (item) => {
      const details = await Http.Get(item.ability.url);
      const { id, name } = details;
      const effect_entries = details.effect_entries.map((effectEntry) => ({ effect: effectEntry.effect, short_effect: effectEntry.short_effect }));
      return { id, name, effect_entries };
    }));

    return abilities;
  }
}
