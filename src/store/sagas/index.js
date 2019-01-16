import { fork, all } from 'redux-saga/effects';
import showSearch from './showSearch';

function* saga2() {
  yield null;
}

function* saga3() {
  yield null;
}

export default function* rootSaga() {
  yield all([fork(showSearch), fork(saga2), fork(saga3)]);
  // code after all-effect
}
