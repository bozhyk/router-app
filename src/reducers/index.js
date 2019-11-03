import {
  LOAD_USER_LIST,
  USER_LIST_FETCH_SUCCEEDED,
  USER_LIST_FETCH_FAILED,
  USER_DATA_FETCH_SUCCEEDED,
  USER_DATA_FETCH_FAILED } from '../actions';

const initialState = {
  userList: [],
  currentUser: {},
  loading: false,
  error: null,
};

export default function usersApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_LIST:
      return {
        ...state,
        loading: true,
      }
    case USER_LIST_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        userList: action.userList
      };
    case USER_DATA_FETCH_SUCCEEDED:
      return {
        ...state,
        currentUser: action.currentUser
      };
    case USER_LIST_FETCH_FAILED:
    case USER_DATA_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };

    default:
      return state;
  }
}
