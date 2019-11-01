import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_USER_LIST, RENDER_USER_LIST } from '../actions';

export function* fetchUserList() {
  const endpoint = 'https://jsonplaceholder.typicode.com/users';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_USER_LIST, userList: data });
}

export function* loadUserList() {
  yield takeEvery(LOAD_USER_LIST, fetchUserList);
}

export default function* rootSaga() {
  yield all([loadUserList()]);
}
