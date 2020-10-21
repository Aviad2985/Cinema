import React, { useState, useEffect, useRef } from 'react';
import { getFilters, getMovies } from '../../infrastructure/movies-selectors';
import { applyFilters } from '../../utils/index';
import { fetchMovieList, resetFilters } from '../../infrastructure/movies-actions-creators';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types';
import FiltersList from '../list-filter/list-filter';
import MainList from './main-list';
import ModalContainer from '../common-components/modal/modal-container';
import SelectedMovieView from '../common-components/modal/selected-movie-display';
import './main-list-style.scss';



const MainListContainer =({ moviesList, filters, fetchMovieList, resetFilters }) => {


   // const dispatch = useDispatch();
   // const  moviesList = useSelector();
   const movieListRef = useRef(null);
   const [isShowFilter, setIsShowFilter] = useState(false);
   const [isShowMovie, setIsShowMovie] = useState(false);
   
   const [movies, setMovies] = useState(moviesList);
   const [isFilterActive, setIsFilterActive] = useState(false);
   
   const [selectedMovie, setSelectedMovie] = useState("")
   const handleOnWheel = (e)=> {
   const currentScrollPosition = movieListRef.current.scrollLeft;
   movieListRef.current.scrollTo({
      top: 0,
      left: currentScrollPosition + e.deltaY,
      behaviour: "smooth"
    });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  useEffect(() => {
    setMovies(applyFilters(moviesList, filters));
  }, [moviesList]);
  
  //useEffect(() => {
  // }, [moviesList]);

  function handleFilterOk(){
    setIsShowFilter(false);
    setIsFilterActive(true);
    setMovies(applyFilters(moviesList, filters));
  }

  function handleFilterClose(){
    setIsShowFilter(false);
  }
  function handleOpenFilter(){
    setIsShowFilter(true);
  }

  function handleSelectedMovie(movie) {
    setSelectedMovie(movie);
    setIsShowMovie(true);
  }

  function handleSelectedMovieBack() {
    setIsShowMovie(false);
  }

  function handleResetFilter() {
    resetFilters();
    setIsFilterActive(false);
  }
  

    return (
        <div className="app-container">
            <div ref={movieListRef} onWheel={handleOnWheel} className="mainList-section">
                <MainList itemsList={movies} onSelectedItem={handleSelectedMovie} />
                {movies.length === 0 && isFilterActive && <div className="empty-filter">No serach results. Please reset filter</div>}
                <ModalContainer customClass="filter-modal" isRenderFooter isShow={isShowFilter} title="Movie Filter" onOkClick={handleFilterOk} onCancelClick={handleFilterClose} >
                    <FiltersList itemsList={movies} />
                </ModalContainer>
                <ModalContainer onCancelClick={handleSelectedMovieBack} customClass="movie-modal" isShow={isShowMovie} title={selectedMovie.title} onOkClick={handleFilterOk}  >
                    <SelectedMovieView backToLIstFunc={handleSelectedMovieBack} movie={selectedMovie} />
                </ModalContainer>
            </div>
            {isFilterActive ?
            (<div className="reset-btn" onClick={handleResetFilter}>Reset Filter</div>) : 
             (<div onClick={handleOpenFilter} className="search-btn">
                <span>Filter</span></div>)}
        </div>
    )
}

MainListContainer.propTypes = {

}

const mapStateToProps =(state) => ({
    moviesList: getMovies(state),
    filters:getFilters(state)
  });
  
  const mapDispatchToProps = (dispatch) => 
    bindActionCreators(
      {
        fetchMovieList,
        resetFilters
      }, dispatch
    );
  

export default connect(mapStateToProps, mapDispatchToProps)(MainListContainer);
