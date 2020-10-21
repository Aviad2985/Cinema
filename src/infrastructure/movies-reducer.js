import * as actionTypes from './action-types';

export const initialState = {
    mainList: [],
    isFetchingMainList: false,
    mainListError:'',
    filtersList:[]
  }



export default (state = initialState, action) => {
    switch (action.type) {

      case actionTypes.GET_MOVIES_REQUEST:
            return { ...state, isFetchingMainList: true }

      case actionTypes.GET_MOVIES_SUCCESS:
            return { ...state, mainList: action.payload, isFetchingMainList: false }
            
      case actionTypes.GET_MOVIES_FAILURE:
         return { ...state,
                  mainListError: action.payload,
                  isFetchingMainList: false
                }
      case actionTypes.UPDATE_FILTERS_LIST:
        return { ...state, filtersList:action.payload }
        
        case actionTypes.RESET_FILTERS_LIST:
          return { ...state, filtersList: [], mainList: [...state.mainList] }
        
      default:
        return state
    }
  }
  
  