import axios from "axios";
import { GET_ERRORS } from "./types";

// Register

export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData) // hit backend api pass in the user Data
    .then(res => console.log(res.data)) // if successfull redirect from action
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    ); // dispatch an action type called geterrors
};
