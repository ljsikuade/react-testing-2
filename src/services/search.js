function search(movieString) {
  return fetch(`http://www.omdbapi.com/?s=${movieString}&apikey=2cda7206`)
      .then(response => response.json())
      .then(result => result)
      .catch(function(error) {
        console.log(error);
        return {
          error: "Something went wrong please try again"
        };
      });
}

export default search;
