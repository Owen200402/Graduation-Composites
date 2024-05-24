const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Basic emNjMjI4MDQxMTI4NEBnbWFpbC5jb20:Crsb7EWnoyLUMRQcbLoX5'
    },
    body: JSON.stringify({
        script: {
          type: 'text',
          subtitles: 'false',
          provider: {type: 'microsoft', voice_id: 'en-US-JennyNeural'}
        },
        source_url: '' // replace my source url after converting it at docs.d-id.com/reference/createtalk
      })
  };
  
  fetch('https://api.d-id.com/talks', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));