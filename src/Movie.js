import React from 'react';
import './Movie.css';

const Movie = (props) => {

    const {Title, Year, Poster} = props;
    
    return (

        <div className = 'movie grow' >
            <img className="poster" src={Poster} alt="my movie poster" width="400" />
            <div className="title-year">
               <h1 className="title"> {Title} </h1>
               <h2 className="year"> {Year} </h2>
           </div>
        </div>
    );
}

export default Movie;