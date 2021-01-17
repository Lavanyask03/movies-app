import React, { Component } from 'react';
import './Movie.css';
/* 
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
 */

class Movie extends Component {

    API_KEY = "bad70be0";

    state = {
        movie_plot: ''
    }

    componentDidMount() {
        let title = this.props.Title;
        this.setPlot(title);
    }

    setPlot = (title) => {
        if (title.trim()) {
            const url = `https://www.omdbapi.com/?t=${title}&apikey=${this.API_KEY}&plot=short`;
           fetch(url)
            .then(response => response.json())
            .then(jsonResponse => {
                this.setState({movie_plot:jsonResponse.Plot});
            });     
        } 
        else {
          return;      
        }
    }

    render() {
        const POSTER_UNAVAILABLE = "https://media.comicbook.com/files/img/default-movie.png?auto=webp"

        const {Title, Year, Poster} = this.props;

        const PosterURL = Poster === "N/A"? POSTER_UNAVAILABLE :Poster;

        return (
            <div className = 'flip-card' >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="front-image" src={PosterURL} alt="my movie poster" width="400" />
                        <div className="front-content">
                            <h1 className="title"> {Title} </h1>
                            <h2 className="year"> {Year} </h2>
                        </div>
                    </div>
                
                    <div className="flip-card-back">
                        {this.state.movie_plot}
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;