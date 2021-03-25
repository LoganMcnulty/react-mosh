import React, { Component } from 'react';
import {getMovies } from "../services/fakeMovieService";
import MaterialTable from 'material-table'

class Movies extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies: movies})
    }

    renderTable = () => {
        console.log('rendering')
        console.log(this.state.movies)
        return (
            <div style={{ maxWidth: '100%' }}>
                {this.state.movies.length === 0 
                    ? 
                        'Out of Movies!'
                    :
                        <div>
                            <p className='p-2'>
                                Num movies in DB: {this.state.movies.length}
                            </p>
                            <MaterialTable
                                columns={[
                                    { title: 'Title', field: 'title' },
                                    { title: 'Genre', field: 'genre.name' },
                                    { title: 'Stock', field: 'numberInStock', type: 'numeric' },
                                    { title: 'Rate', field: 'dailyRentalRate', type: 'numeric' }
                                ]}
                                data={this.state.movies}
                                actions={[
                                    {
                                        icon: 'delete',
                                        tooltip: 'Delete Movie',
                                        onClick:(event, rowData) => this.handleDelete(rowData)
                                    }
                                ]}
                                title="Demo Title"
                            />
                        </div>
                }


            </div>
        )
    }

    render() {
        return(
        <div>
            {this.renderTable()}
        </div>

        )
        
    }

}

export default Movies;