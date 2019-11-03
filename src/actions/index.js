export const LOAD_USER_LIST = 'LOAD_USER_LIST';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const USER_LIST_FETCH_SUCCEEDED = 'USER_LIST_FETCH_SUCCEEDED';
export const USER_LIST_FETCH_FAILED = 'USER_LIST_FETCH_FAILED';
export const USER_DATA_FETCH_SUCCEEDED = 'USER_DATA_FETCH_SUCCEEDED';
export const USER_DATA_FETCH_FAILED = 'USER_DATA_FETCH_FAILED';

export function loadUserList() {
  return {
    type: LOAD_USER_LIST
  };
}

export function loadUserData(id) {
  return {
    type: LOAD_USER_DATA,
    payload: id
  };
}
