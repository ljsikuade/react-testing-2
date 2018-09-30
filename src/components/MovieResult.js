import React from 'react';
import Like from './Like';

function MovieResult({movie}){
  return (
    <li>
      <h2>{movie.Title} - {movie.Year}</h2>
      <Like />
      <img src={movie.Poster} />
    </li>
  );
}

export default MovieResult;
