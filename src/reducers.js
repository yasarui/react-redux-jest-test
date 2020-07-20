import { combineReducers } from 'redux'

export const  commentsReducer = (currentState=[],action) =>{
    if(action.type === "ADD_COMMENT"){
        return [...currentState,action.payload];
    }
    return currentState;
}

export default combineReducers({comments:commentsReducer})

