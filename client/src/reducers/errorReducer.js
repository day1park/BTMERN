import { GET_ERRORS } from "../actions/types";

const initialState = {}; // empty object object to be errors itself

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // payload include errors object coming from server
    default:
      return state;
  }
}
