import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { TEST_DISPATCH, GET_ERRORS, SET_CURRENT_USER } from './types';

export const registerUser = (userData) => dispatch => {
    return{
        type: TEST_DISPATCH, 
        payload: userData

    }
   
        
};
/*
export const registerUser = (userData, history) => dispatch => {
    axios.post('api/users/register', userData)
        .then(res => history.push('/login'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
*/

export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            //set token to local storage
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            //Set token to Auth header
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//set logged in user 
export const setCurrentUser = decoded => {
    return{
        type: SET_CURRENT_USER, 
        paylod: decoded
    };
};


//log user out
export const logoutUser =() => dispatch =>{
    //remove token from local storage
    localStorage.removeItem('jwtToken'); 
    setAuthToken(false); 
    dispatch(setCurrentUser({})); 
};