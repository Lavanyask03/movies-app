import React, {Component} from 'react';
import './Search.css';

class Search extends Component{

    state = {
        title : ''
    }

    handleInputChange = (event) => {
        event.preventDefault();
        const title = event.target.value;
        console.log(title);
        this.setState({title: title});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {title} = this.state;
        console.log(this.state.title);
        this.props.sendRequest(title);
        this.setState({title:''});
    }

    render() {

        const {title} = this.state;

        return (
            <div className = "search">
                <input className = "search-input" type = "text" value = {title} placeholder = "Search movies" onChange = {this.handleInputChange} />
                <input className = "search-btn" type = "submit" value = "Search" onClick = {this.handleSubmit} />
            </div>
        );
    }
}

export default Search;