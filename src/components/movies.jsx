import React, { Component } from 'react';
import {getMovies } from "../services/fakeMovieService";
import MaterialTable from 'material-table'
import Like from './common/like'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate'
import { times } from 'lodash';
import ListGroup from '../components/common/listGroup'
import {getGenres} from '../services/fakeGenreService'

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage:1,
        genres:[],
        tableType: this.props.tableType,
    }

    componentDidMount(){
        this.setState({movies:getMovies(), genres:getGenres()})
    }
    
    // getGenres()

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)

        this.setState({movies: movies})
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]}
        movies[index].liked = !movies[index].liked
        this.setState({movies})
    }

    handlePageChange = page => {
        this.setState({currentPage:page})
    }

    handleGenreSelect = genre => {
        console.log(genre)
    }

    renderTable = () => {
        console.log('Movie Table - Rendered')
        const { pageSize, currentPage, movies:allMovies, tableType, genres} = this.state
        const movies = paginate(allMovies, currentPage, pageSize)

        return (
            <div style={{ maxWidth: '100%' }}>
                {allMovies.length === 0 
                    ? 
                        'Out of Movies!'
                    :
                        <div className = 'row'>
                            <div className='col-3'>
                                <ListGroup
                                    items={genres}
                                    onItemSelect = {this.handleGenreSelect}
                                />
                            </div>
                            <div className='col'>
                            <p className='text-dark p-2 m-0'>
                                Num movies in DB: {allMovies.length}
                            </p>

                            {tableType === 'material' 
                            
                            ?
                                <MaterialTable
                                    columns={[
                                        { title: 'Title', field: 'title' },
                                        { title: 'Genre', field: 'genre.name' },
                                        { title: 'Stock', field: 'numberInStock', type: 'numeric' },
                                        { title: 'Rate', field: 'dailyRentalRate', type: 'numeric' }
                                    ]}
                                    data={allMovies}
                                    actions={[
                                        {
                                            icon: 'delete',
                                            tooltip: 'Delete Movie',
                                            onClick:(event, rowData) => this.handleDelete(rowData)
                                        }
                                    ]}
                                    title="Demo Title"
                                /> 

                            :
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th scope='col'>Title</th>
                                                <th scope='col'>Genre</th>
                                                <th scope='col'>Stock</th>
                                                <th scope='col'>Rate</th>
                                                <th scope='col'></th>
                                                <th scope='col'></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {movies.map(m => (
                                                <tr key={m._id}>
                                                    <td>{m.title}</td>
                                                    <td>{m.genre.name}</td>
                                                    <td>{m.numberInStock}</td>
                                                    <td>{m.dailyRentalRate}</td>
                                                    <td>
                                                        <Like 
                                                            content={m}
                                                            onLike={() => this.handleLike(m)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm"
                                                            onClick = {() => this.handleDelete(m)}
                                                        >
                                                            Remove
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                            }

                            <Pagination 
                                itemsCount={allMovies.length}
                                pageSize={pageSize}
                                onPageChange={this.handlePageChange}
                                currentPage = {currentPage}
                            />
                            </div>

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