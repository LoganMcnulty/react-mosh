import React, { Component } from 'react';

const ListGroup = (props) => {
    const {items , textProperty, valueProperty } = props
    console.log(items)
    return (
        <ul className="list-group mt-5">
            {items.map(item => {
                console.log(item);
                return<li key={item[valueProperty]} className='list-group-item' style={{'border':'2px solid black'}}>{item[textProperty]}</li>
            })}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valuePropert: '_id'
}
 
export default ListGroup;
 