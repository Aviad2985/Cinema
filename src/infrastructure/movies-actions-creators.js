import axios from 'axios';
import * as actionTypes from './action-types';
import { ROUTS, SERVER_URL }  from '../utils';


function createActionObject(type, payload= '') {
    return { type, payload }
};


export const fetchMovieList = () => {
    return dispatch => {
        dispatch(createActionObject( actionTypes.GET_MOVIES_REQUEST ));
        axios.get(ROUTS.getMovies, {headers: { 'Content-Type': 'application/json' }})
        .then(response => dispatch(createActionObject( actionTypes.GET_MOVIES_SUCCESS, response.data)))
        .catch(error => {
            console.log(error);
            dispatch(createActionObject( actionTypes.GET_MOVIES_FAILURE ));
        })
    }
}

// export const fetchMovieList = () => {
//     return dispatch => {
//         dispatch(createActionObject( actionTypes.GET_MOVIES_REQUEST ));
//         fetch('/api/movies'/*`${ROUTS.getvies}`*/, { method: 'GET', headers: { 'Content-Type': 'application/json' }})
//         .then(response => console.log('RES IS: ',response.json()))
//         .then(data => dispatch(createActionObject( actionTypes.GET_MOVIES_SUCCESS, data)))
//         .catch(error => {
//             console.log(error);
//             dispatch(createActionObject( actionTypes.GET_MOVIES_FAILURE ));
//         })
//     }
// }

export const updateFiltersList = (newFiltersList) => {
    return dispatch => {
        dispatch(createActionObject(actionTypes.UPDATE_FILTERS_LIST, newFiltersList ));
    }
}

export const resetFilters = () => {
    return dispatch => {
        dispatch(createActionObject(actionTypes.RESET_FILTERS_LIST ));
    }
}

