import { TEST_DISPATCH } from '../actions/types';
const initialState = {
    isAuthenticate: false, 
    user: {},

};   


export default function(state = initialState, action){
    switch(action.type){
        case TEST_DISPATCH: 
            return{
                ...state,
                //dispatching to reducer data that's passed in 
                user: action.payload
            }
         default:
          return state; 
    }
}