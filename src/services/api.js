import axios from 'axios';
// import { delay } from 'redux-saga';

const API_ROOT = 'http://api.tvmaze.com/';

const fetchShows = term => {
  const url = `${API_ROOT}/search/shows?q=${term}`;
  return axios.get(url);
  // return delay(3000);
};

export default { fetchShows };
