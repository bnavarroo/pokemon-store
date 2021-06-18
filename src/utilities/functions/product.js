import { generateValueByIdAndType } from './general';
import { PRODUCT_IMAGE_SETTINGS } from '../../constants/product';

/**
 * Retorna a estrutura básica de um produto/pokemón
 * @param {object} product
 * @param {string} storeRef
 * @returns {object} {id: number, name: string, price: number}
*/
export function getBaseProduct(product) {
  const { id, name } = product;
  return {
    id,
    name,
    price: generateValueByIdAndType(id),
  };
}

/**
 * Retorna a imagem "padrão" de um produto/pokemón
 * @param {object} id do produto/pokemón
 * @returns {string}
*/
export function getBaseProductImage(id) {
  return PRODUCT_IMAGE_SETTINGS.url.replace(PRODUCT_IMAGE_SETTINGS.strReplace, id);
}

export default {};
