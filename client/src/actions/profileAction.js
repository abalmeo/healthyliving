import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_JOURNAL
} from './types';

// Get user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
};

// Create or Update Profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
      // If edit true, then profile updated otherwise profile is created
    dispatch(setAlert(edit? "Profile Updated": "Profile Created", "success"));
    }


  } catch (err) {

  }
}

export const updateProfile = () => {
  try {
    const res = await axios.post("/api/profile");

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    })

  }
}
