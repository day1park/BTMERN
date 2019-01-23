import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData) // hit backend api pass in the user Data
    .then(res => history.push("/login")) // if successful, redirect from action to login
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    ); // dispatch an action type called geterrors
};

// Login - get User token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // save to localstorage
      const { token } = res.data;
      // Set token to localstorage
      localStorage.setItem("jwtToken", token); // only stores strings
      // Set token to Auth header
      setAuthToken(token); // token has user information
      // decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
