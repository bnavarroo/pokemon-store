const STORAGE_STATE_KEY = 'pokemonStoreStorageState';

/**
 * Converte o estado em string e salva na sessionStorage
 *
*/
export function saveStateToSessionStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    sessionStorage.setItem(STORAGE_STATE_KEY, serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Limpa a sessionStorage
 *
*/
export function clearStateInSessionStorage() {
  try {
    sessionStorage.removeItem(STORAGE_STATE_KEY);
  } catch (e) {
    console.warn(e);
  }
}

/**
 * Carrega os dados da sessionStorage e converte em objeto
 * @returns {object} { state }
 *
*/
export function loadStateFromSessionStorage() {
  try {
    const serialisedState = sessionStorage.getItem(STORAGE_STATE_KEY);
    return serialisedState === null ? undefined : JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
