import { ObjectToUrlParams, ObjectToFormData } from './converters';

function ExecuteHttpRequest(url, requestData) {
  return fetch(url, requestData).then((response) => response.json());
}

function GetHttpRequestInit(method) {
  return {
    method,
    headers: new Headers({
      Accept: 'application/json, text/plain, multipart/form-data, */*',
      'Content-Type': 'application/json; charset=UTF-8',
    }),
  };
}

export default class Http {
  constructor() {
    throw new Error('Não é possível instanciar objetos dessa classe.');
  }

  static Get(url, queryParams = {}) {
    try {
      const localUrl = `${url}${ObjectToUrlParams(queryParams)}`;
      const localConfig = GetHttpRequestInit('GET');
      return ExecuteHttpRequest(localUrl, localConfig);
    } catch (error) {
      console.warn(`Um erro foi disparado ao tentar realizar um GET para ${url}`);
      console.error(error);
      return null;
    }
  }

  static Post(url, params = {}) {
    try {
      const { queryParams, headerParams, bodyParams } = params;

      const localConfig = GetHttpRequestInit('POST');
      const localUrl = queryParams ? `${url}${ObjectToUrlParams(queryParams)}` : url;

      if (headerParams) {
        const { headers } = localConfig;
        Object.keys(headerParams).forEach((key) => {
          headers.append(key, headerParams[key]);
        });
      }

      if (bodyParams) {
        localConfig.body = ObjectToFormData(bodyParams);
      }

      return ExecuteHttpRequest(localUrl, localConfig);
    } catch (error) {
      console.warn(`Um erro foi disparado ao tentar realizar um POST para ${url}`);
      console.error(error);
      return null;
    }
  }
}
