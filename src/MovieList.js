import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
    const cardComponent = movies.map((movie,i) => {
		return <Movie key = {i} Title={movie.Title} Year={movie.Year} Poster={movie.Poster} />
	})

	return (
		<div>
			{cardComponent}
		</div>
	);
}

export default MovieList;