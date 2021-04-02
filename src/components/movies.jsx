import React, { Component } from 'react';
import {getMovies } from "../services/fakeMovieService";
import MaterialTable from 'material-table'
import Pagination from './common/pagination'
import {paginate} from '../utils/paginate'
import _ from 'lodash';
import ListGroup from '../components/common/listGroup'
import {getGenres} from '../services/fakeGenreService'
import MoviesTable from '../components/moviesTable'

class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage:1,
        genres:[],
        sortColumn: {path:'title', order:'asc'},
        tableType: this.props.tableType
    }

    componentDidMount(){
        const genres = [{_id:'', name: 'All Genres'},...getGenres()]
        this.setState({movies:getMovies(), genres})
    }

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
        this.setState({selectedGenre: genre, currentPage:1})
    }

    handleSort = sortColumn => {
        this.setState({sortColumn})
    }

    getPageData = () => {
        const { pageSize, currentPage, movies:allMovies, selectedGenre, sortColumn} = this.state

        // filter
            const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id)
            :allMovies
        // sort 
            const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        // pgainate
            const movies = paginate(sorted, currentPage, pageSize)

            return {totalCount: filtered.length, data:movies}
    }

    renderTable = () => {
        const { pageSize, currentPage, movies:allMovies, tableType, genres, selectedGenre, sortColumn} = this.state

        const {totalCount, data} = this.getPageData()


        return (
            <div style={{ maxWidth: '100%' }}>
                {
                allMovies.length === 0 
                    ? 
                        'Out of Movies!'
                    :
                        <div className = 'row'>
                            <div className='col-3'>
                                <ListGroup
                                    items={genres}
                                    selectedItem={selectedGenre}
                                    onItemSelect = {this.handleGenreSelect}
                                />
                            </div>
                            <div className='col'>
                            <p className='text-dark p-2 m-0'>
                                Num movies in DB: {totalCount}
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
                                <MoviesTable 
                                    movies={data}
                                    onLike={this.handleLike}
                                    onDelete={this.handleDelete}
                                    onSort={this.handleSort}
                                    sortColumn={sortColumn}
                                />
                            }

                                <Pagination 
                                    itemsCount={totalCount}
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