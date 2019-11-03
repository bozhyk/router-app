import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_USER_LIST, LOAD_USER_DATA, RENDER_USER_LIST, RENDER_USER_FORM } from '../actions';

const apiHost = 'https://jsonplaceholder.typicode.com';

function* fetchEndpoint(endpoint) {
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  return data;
}

export function* fetchUserList() {
  const data = yield fetchEndpoint(`${apiHost}/users`);
  yield put({ type: RENDER_USER_LIST, userList: data });
}

export function* fetchUserById(action) {
  const { payload: id } = action;
  const data = yield fetchEndpoint(`${apiHost}/users/${id}`);
  yield put({ type: RENDER_USER_FORM, currentUser: data });
}

export function* loadUserList() {
  yield takeEvery(LOAD_USER_LIST, fetchUserList);
}

export function* loadUserData() {
  yield takeEvery(LOAD_USER_DATA, fetchUserById);
}

export default function* rootSaga() {
  yield all([loadUserList(), loadUserData()]);
}
