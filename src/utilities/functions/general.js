/**
 * Verifica se valor é null
 * @param {any} value
 * @returns {boolean}
*/
export const isNull = (value) => value === null;

/**
 * Verifica se valor é undefined
 * @param {any} value
 * @returns {boolean}
*/
export const isUndefined = (value) => value === undefined;

/**
 * Verifica se string é vazia
 * @param {string} value
 * @returns {boolean}
*/
export const stringIsEmpty = (value) => (typeof value === 'string' ? (value === '' || value.length === 0) : true);

/**
 * Verifica se string é nula ou vazia
 * @param {string} value
 * @returns {boolean}
*/
export const isNullOrStringEmpty = (value) => isNull(value) || stringIsEmpty(value);

/**
 * Verifica se valor é null ou undefined
 * @param {any} value
 * @returns {boolean}
*/
export const isNullOrUndefined = (value) => isNull(value) || isUndefined(value);

/**
 * Faz a rolagem para o topo da págin
 *
*/
export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
