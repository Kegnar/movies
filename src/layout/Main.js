import './Main.css'
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
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
                {
                    this.state.movies.length == 0 ? <Preloader /> :
                    <MovieList movies={this.state.movies}/>
                }
            </div>
        )
    }
}

export default Main;