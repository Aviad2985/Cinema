import React from 'react'
import PropTypes from 'prop-types'
import star from '../../../images/star.png'

function ListItemTitle({ rating, runtime }) {
    return (
        <div className="mainListItem-rating-time">
                <span className="mainListItem-star"><img alt="rating" src={star}></img></span>
                <span className="mainListItem-rating">{rating}</span>
                <span className="mainListItem-rating">{runtime}</span>
        </div>
    )
}

ListItemTitle.propTypes = {
        title: PropTypes.string,
        rating: PropTypes.string,
        released: PropTypes.string,
        runtime: PropTypes.string,
}

export default ListItemTitle

