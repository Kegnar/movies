import './Main.css'
import MovieList from "../components/MovieList";
import React from 'react';

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount()
    {
    fetch('https://www.omdbapi.com/?s=terminator&apikey=c34b1a23')
        .then(res => res.json())
        .then(data => this.setState({ movies: data.Search }));
    }
    render()
    {
        return (
            <div className="main">
                <MovieList movies={this.state.movies}/>
            </div>
        )
    }
}

export default Main;