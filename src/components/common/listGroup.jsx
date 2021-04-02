import React from 'react';

const ListGroup = ({items , textProperty, valueProperty, selectedItem, onItemSelect }) => {

    return (
        <ul className="list-group mt-5">
            {items.map(item => {
                return <li 
                key={item[valueProperty]} 
                className={item === selectedItem ? 'list-group-item active' : "list-group-item"}
                onClick={() => onItemSelect(item)}
                style={{'border':'2px solid black'}}>{item[textProperty]}
                </li>
            })}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
 
export default ListGroup;
 