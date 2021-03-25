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
        )
        
        
        // this.state.movies.map(movie => {
        //     const {_id:id, title, genre, numberInStock:stock, dailyRentalRate:rate} = movie
        //     return (
        //         <tr key={id}>
        //             <th>{title}</th>
        //             <td>{genre.name}</td>
        //             <td>{stock}</td>
        //             <td>{rate}</td>
        //             <td><button 
        //                 onClick = {() => this.handleDelete(movie)}
        //                 className='btn btn-danger'>Delete</button></td>
        //         </tr>
        //     )}
        // )
    }

    handleIncrement = (stuff) => {
        console.log(stuff)
    }

    render() {
        return(
        <div>
            <button onClick={
                () => this.handleIncrement({movies: this.state.movies})
                } 
                className='btn btn-primary'>Console movie stuff
            </button>
            {this.renderTable()}
        </div>

        )
        
    }

}

export default Movies;