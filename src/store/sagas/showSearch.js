import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../../services/api';

function* fetchShows(action) {
  try {
    const shows = yield call(api.fetchShows, action.payload.term);
    yield put(actions.showSearchSucceed(shows.data));
  } catch (error) {
    yield put(actions.showSearchFailed(error.message));
  }
}

function* showSearch() {
  yield takeEvery(actionTypes.SHOW_SEARCH_REQUESTED, fetchShows);
}

export default showSearch;
