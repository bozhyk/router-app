export const LOAD_USER_LIST = 'LOAD_USER_LIST';
export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const RENDER_USER_LIST = 'RENDER_USER_LIST';
export const RENDER_USER_FORM = 'RENDER_USER_FORM';

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
