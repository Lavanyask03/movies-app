import React, {Component} from 'react';
import './App.css';
// import unirest for API requests
// import unirest from 'unirest';
import Search from './Search';
import MovieList from './MovieList';

class App extends Component{

  API_KEY = "YOUR_API_KEY";

  state = {
    movies : []
  }

  sendRequest = (title) => {
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=${this.API_KEY}`)
        .then(response => response.json())
        .then(jsonResponse => {
            this.setState({movies:jsonResponse.Search});
        });
    }

  render() {
    return (
      <div className = "App" >
        <header className = "App-header" >
          <h1> Movies App </h1>
          <Search sendRequest = {this.sendRequest} />
        </header>
        <main id = "main" >
          {
            this.state.movies.length === 0
            ? <h1> No Results!! </h1>
            : <MovieList movies = {this.state.movies} />
          }
        </main>
      </div>
    );
  }
}

export default App;