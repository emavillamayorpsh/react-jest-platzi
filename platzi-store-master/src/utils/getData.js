/* eslint-disable arrow-parens */
const getData = api => {
  return fetch(api)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(error => error);
};

export default getData;
