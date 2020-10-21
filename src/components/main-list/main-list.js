import React from 'react';
import MainListItem from './main-list-item';
import PropTypes from 'prop-types';

import './main-list-style.scss';



const MainList = ({ itemsList, onSelectedItem }) => {

function handleItemSelected(item) {
    onSelectedItem(item);
}

//if(items!==null)
    return (
        <div  className="mainList-container">
            {itemsList.map((movie) => <MainListItem
                key= {movie.id}
                item={movie}
                onSelect={handleItemSelected}
            />)}
        </div>
    )
}

MainList.propTypes = {

}

export default MainList
