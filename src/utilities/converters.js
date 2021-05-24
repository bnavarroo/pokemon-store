/**
 * Converte um objeto em parametros de url para chamadas GET
 * @param {object} object {}
 * @returns {string} Ex.: ?paramA=1&paramB=2&paramC=3
*/
export function ObjectToUrlParams(object) {
  let params = '';
  Object.keys(object).forEach((key) => {
    params += params === '' ? `?${key}=${encodeURIComponent(object[key])}` : `&${key}=${encodeURIComponent(object[key])}`;
  });
  return params;
}

/**
 * Converte um objeto genérico em um objeto FormData
 * @param {object} object {}
 * @returns {FormData} objeto do tipo FormData
*/
export function ObjectToFormData(object) {
  try {
    const fd = new FormData();
    Object.keys(object).forEach((key) => {
      fd.append(key, object[key]);
    });

    return fd;
  } catch (error) {
    console.warn('Um erro foi disparado durante a execução:');
    console.error(error);
    return null;
  }
}

/**
 * Converte uma string com ou sem caracteres com acentuação em string no formato de url amigável
 * @param {string} str
 * @returns {string} Ex.: VALOR RECEBIDO: arranha céu, VALOR RETORNADO: arranha-ceu
*/
export function stringToUrlParam(str = '') {
  return str === '' ? '' : str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/(^&)|,/g, '').replaceAll(' ', '-');
}

/**
 * Converte (parcialmente) uma string no formato de url amigável em uma string comum
 * @param {string} str
 * @returns {string} Ex.: VALOR RECEBIDO: arranha-ceu, VALOR RETORNADO: arranha ceu
*/
export function urlParamToString(str = '') {
  return str === '' ? '' : str.replaceAll('-', ' ');
}

/**
 * Converte um número para formato de moeda
 * @param {number} number
 * @returns {string} Ex.: R$ 0,00
*/
export function numberToLocaleString(number = 0) {
  return number.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
}
