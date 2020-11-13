import React from 'react';
import './Movie.css';

const Movie = (props) => {

    const POSTER_UNAVAILABLE = "https://media.comicbook.com/files/img/default-movie.png?auto=webp"
    const {Title, Year, Poster} = props;
    const poster = Poster === "N/A"? POSTER_UNAVAILABLE :Poster;

    return (

        <div className = 'movie grow' >
            <img className="poster" src={poster} alt="my movie poster" width="400" />
            <div className="title-year">
               <h1 className="title"> {Title} </h1>
               <h2 className="year"> {Year} </h2>
           </div>
        </div>
    );
}

export default Movie;