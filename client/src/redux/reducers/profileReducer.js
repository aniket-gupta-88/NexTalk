import { PROFILE_TYPES } from "../actions/profileAction";
import { EditData } from "../actions/globalTypes";

const initialState = {
  loading: false,
  ids: [],
  users: [],
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PROFILE_TYPES.GET_USER:
      const newUser = action.payload.user;
      if (state.users.every((user) => user._id !== newUser._id)) {
        return {
          ...state,
          users: [...state.users, newUser],
        };
      }
      return state;
    case PROFILE_TYPES.FOLLOW:
      return {
        ...state,
        users: EditData(state.users, action.payload._id, action.payload),
      };
    case PROFILE_TYPES.UNFOLLOW:
      return {
        ...state,
        users: EditData(state.users, action.payload._id, action.payload),
      };
    case PROFILE_TYPES.GET_ID:
      return {
        ...state,
        ids: [...state.ids, action.payload],
      };
    case PROFILE_TYPES.GET_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case PROFILE_TYPES.UPDATE_POST:
      return {
        ...state,
        posts: EditData(state.posts, action.payload._id, action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
