import * as actionTypes from './action-types';


export const initialState = {
    friendsLists:[],
    mainList:[],
    isFetchingMainList: false,
    isFetchingFriendsList: false,
    mainListError:'',
    friendsListError:'',
  }



export default (state = initialState, action) => {
    switch (action.type) {

      case actionTypes.GET_MAINLIST_ITEMS_REQUEST:
            return { ...state, isFetchingMainList: true }

      case actionTypes.GET_MAINLIST_ITEMS_SUCCESS:
            return { ...state, mainList: action.payload, isFetchingMainList: false }
            
      case actionTypes.GET_MAINLIST_ITEMS_FAILURE:
         return { ...state,
                  mainListError: action.payload,
                  isFetchingMainList: false
                }
      default:
        return state
    }
  }
  
  