export {};

const fetchOptions: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Basic emNjMjI4MDQxMTI4NEBnbWFpbC5jb20:Crsb7EWnoyLUMRQcbLoX5'
    },
  };
  
fetch('https://api.d-id.com/talks', fetchOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));