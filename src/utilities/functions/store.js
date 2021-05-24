import { STORES, STORE_ATTR_REF } from '../../constants/stores';

/**
 * Converte uma store para modelo utilizado pelo estado global, somente com as informações necessárias
 * @param {object} store { name: string, type: 'string, typeId: int, description: string, logo: object, default: bool }
 * @returns {object} { name: string, type: 'string, typeId: int }
*/
function storeToStateModel(store) {
  return {
    name: store.name,
    type: store.type,
    typeId: store.typeId,
  };
}

/**
 * Retorna a loja padrão
 * @param {boolean} stateModel
 * @returns {object} { name: string, type: 'string, typeId: int, description: string, logo: object, default: bool } ou { name: string, type: 'string, typeId: int }
*/
export function getStoreDefault(stateModel = true) {
  const storeDefault = STORES.filter((store) => store.default)[0] ?? STORES[0];
  return stateModel ? storeToStateModel(storeDefault) : storeDefault;
}

/**
 * Retorna a loja baseada na referência
 * @param {string} ref
 * @param {boolean} stateModel
 * @returns {object} { name: string, type: 'string, typeId: int, description: string, logo: object, default: bool } ou { name: string, type: 'string, typeId: int }
*/
export function getStoreByRef(ref, stateModel = true) {
  const storeByRef = STORES.filter((store) => store[STORE_ATTR_REF] === ref)[0];
  return stateModel ? storeToStateModel(storeByRef) : storeByRef;
}
