import * as actionTypes from './action-types';

function createActionObject(type, payload= '') {
    return { type, payload }
};

export const fetchTripItems = () => {
    return dispatch => {
        dispatch(createActionObject( actionTypes.GET_MAINLIST_ITEMS_REQUEST ));
        fetch('http://localHost:6123/trip-items')
        .then(res => console.log(res.json()))
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(createActionObject( actionTypes.GET_MAINLIST_ITEMS_SUCCESS ));
            return res.products;
        })
        .catch(error => {
            dispatch(createActionObject( actionTypes.GET_MAINLIST_ITEMS_FAILURE ));
        })
    }
}

