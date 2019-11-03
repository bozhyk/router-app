import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_USER_LIST, LOAD_USER_DATA,
  USER_LIST_FETCH_SUCCEEDED,
  USER_LIST_FETCH_FAILED,
  USER_DATA_FETCH_SUCCEEDED,
  USER_DATA_FETCH_FAILED,
} from '../actions';

const apiHost = 'https://jsonplaceholder.typicode.com';

function* fetchEndpoint(endpoint) {
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  return data;
}

export function* fetchUserList() {
  try {
    const data = yield fetchEndpoint(`${apiHost}/users`);
    yield put({ type: USER_LIST_FETCH_SUCCEEDED, userList: data });
  } catch (e) {
    yield put({ type: USER_LIST_FETCH_FAILED, message: e.message });
  }
}

export function* fetchUserById(action) {
  try {
    const { payload: id } = action;
    const data = yield fetchEndpoint(`${apiHost}/users/${id}`);
    yield put({ type: USER_DATA_FETCH_SUCCEEDED, currentUser: data });
  } catch (e) {
    yield put({ type: USER_DATA_FETCH_FAILED, message: e.message });
  }
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
