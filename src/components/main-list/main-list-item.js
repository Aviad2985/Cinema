import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MovieItemTitle from '../common-components/movie-list-item-title';

function MainListItem({ onSelect, item }) {
    // const { isSelfAssigned, name, contributors, amount, id} = item;
    // const { updateAmountFunc, removeItemFunc } = props;

    // const [isShowApplyOnAmountChange , setIsShowApplyOnAmountChange] = useState(false);
    // const [itemInternalAmount , setItemInternalAmount] = useState(amount);


    function handleOnItemSelected(){
        onSelect(item);
    }

    return (
        <div className="item-container-frame">
            <div className="top-title">
                <div >{item.title}</div>
                <div>{item.released}</div>
            </div>
            <div onClick={handleOnItemSelected} className="mainListItem-container" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="mainListItem-title">
                <MovieItemTitle {...item} />
            </div>
        </div>
    )
}

MainListItem.propTypes = {
    onselect: PropTypes.func,
    movie: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        synopsis: PropTypes.string,
        rating: PropTypes.string,
        type: PropTypes.string,
        released: PropTypes.string,
        runtime: PropTypes.string,
        largeimage: PropTypes.string,
        unogsdate: PropTypes.string,
        imdbid: PropTypes.string,
        download: PropTypes.string,
    })
    
}

export default MainListItem
