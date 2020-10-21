import React from 'react';
import PropTypes from 'prop-types';
import  ListItemTitle from '../../common-components/movie-list-item-title';
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function SelectedMovieView(props) {

    const { largeimage, synopsis, imdbid, runtime, rating} = props.movie;

    function handleOnClick() {
        window.open(`https://www.imdb.com/title/${imdbid}`, '_blank')
    }

    return (
        <div className="selected-item-container" >
            <ListItemTitle rating={rating} runtime={runtime} />
            <div style={{display: 'flex' }}>
                <div className="large-img"><img src={largeimage}/></div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '2vh', color: "black"  }}>{synopsis}</strong>
                    <strong style={{ cursor: 'pointer', margin: '0 auto'}} onClick={handleOnClick}>OPEN IMDB LINK</strong>
                    <Button  onClick={props.backToLIstFunc}>BACK TO LIST</Button>
                </div>
            </div>
            
            
        </div>
    );
}
  
  SelectedMovieView.propTypes = {
        title: PropTypes.string,
        rating: PropTypes.string,
        released: PropTypes.string,
        runtime: PropTypes.string,
}

export default SelectedMovieView;
