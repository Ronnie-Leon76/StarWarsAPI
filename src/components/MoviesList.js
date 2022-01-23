import React from "react";

import Movie from "./Movie";
import "./MovieList.css";

const MovieList = (props) => {
  //const data = Array.from(props.movies);
  return (
    <ul className="movies-list">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
