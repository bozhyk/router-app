import { RENDER_USER_LIST, RENDER_USER_FORM } from '../actions';

const initialState = {
  userList: [],
  currentUser: {},
  loading: false
};

export default function usersApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_USER_LIST:
      return {
        ...state,
        userList: action.userList
      };
      case RENDER_USER_FORM:
        return {
          ...state,
          currentUser: action.currentUser
        };

    default:
      return state;
  }
}
