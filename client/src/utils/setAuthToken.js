import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete auth header if token isnt there
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
