const getData = url => fetch(url)
  .then(response => response.json())
  .then(response => response)
  .catch(error => error);

export default getData;
