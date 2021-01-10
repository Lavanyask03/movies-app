import React, {Component} from 'react';
import './App.css';
// import unirest for API requests
// import unirest from 'unirest';
import Search from './Search';
import MovieList from './MovieList';

class App extends Component{

  API_KEY = "bad70be0";

  state = {
    movies : []
  }

  sendRequest = (title) => {
    if (title.trim()) {
       fetch(`https://www.omdbapi.com/?s=${title}&apikey=${this.API_KEY}`)
        .then(response => response.json())
        .then(jsonResponse => {
            this.setState({movies:jsonResponse.Search});
        });     
    } 
    else {
      return;      
    }
  }

  render() {
    return (
      <div className = "App" >
        <header className = "App-header" >
          <h1> Movies App </h1>
          <Search sendRequest = {this.sendRequest} />
        </header>
        <main id = "main" >
            <MovieList movies = {this.state.movies} />
        </main>
      </div>
    );
  }
}

export default App;