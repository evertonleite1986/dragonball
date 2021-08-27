export const Api = {
  baseUrl: 'https://blue-backend-modulo4front.herokuapp.com',

  authorization: 'everton_leite25@hotmail.com',

  readAllUrl: () => Api.baseUrl + '/',
  readOneUrl: id => Api.baseUrl + '/' + id,

  // GET para pegar dados
  // DELETE para deletar dados
  // POST para criar dados
  // PUT para alterar dados existente

  readAllUrl: () => Api.baseUrl + '/',
  readOneUrl: (id) => Api.baseUrl + '/' + id,

  createUrl: () => Api.baseUrl + '/',

  deleteAllUrl: () => Api.baseUrl + '/',
<<<<<<< HEAD
  deleteUrl: id => Api.baseUrl + '/' + id,

  updateUrl: (id) => Api.baseUrl + '/' + id, 

=======
  deleteUrl: (id) => Api.baseUrl + '/' + id,

  updateUrl: (id) => Api.baseUrl + '/' + id,

  //https://blue-backend-modulo4front.herokuapp.com/226

  //FAZER UM GET ALL, PARA PEGAR TUDO
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  buildApiGetRequest: (url) => {
    return fetch(url, {
      method: 'GET',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },

  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

<<<<<<< HEAD
=======
  //FAZER UM PUT PARA ALTERAR OS DADOS
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: 'PUT',
      headers: new Headers({
        Authorization: Api.authorization,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
    });
  },

<<<<<<< HEAD
=======
  //FAZER UM DELETE PARA APAGAR TODOS OS DADOS
>>>>>>> c4a3491c369ed8c521366576d45a3de17f27eb8d
  buildApiDeleteRequest: (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        Authorization: Api.authorization,
      }),
    });
  },
};
