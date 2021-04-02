import React, { Component } from 'react';
import Like from './common/like'
import Table from './common/table'


class MoviesTable extends Component {

    columns = [
        {path: 'title', label:'Title'},
        {path: 'genre.name', label:'Genre'},
        {path: 'numberInStock', label:'Stock'},
        {path: 'dailyRentalRate', label:'Rate'},
        {key: 'like', content: m => (
            <Like content={m} onLike={() => this.props.onLike(m)}/>
        )},
        {key: 'delete', content: m => (
            <button className="btn btn-danger btn-sm" onClick = {() => this.props.onDelete(m)}>Remove</button>
        )}
    ]

    render() {
        const {movies, onSort, sortColumn} = this.props;
        return ( 
            <Table
                columns={this.columns}
                data={movies}
                sortColumn={sortColumn}
                onSort={onSort}
            />
        );
    }
}
 
 
export default MoviesTable;