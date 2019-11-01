import { RENDER_USER_LIST } from '../actions';

const initialState = {
  userList: [],
  loading: false
};

export default function usersApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_USER_LIST:
      return {
        ...state,
        userList: action.userList
      };

    default:
      return state;
  }
}
