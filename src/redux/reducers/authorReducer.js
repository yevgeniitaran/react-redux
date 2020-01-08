import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case types.DELETE_AUTHOR_SUCCESS:
      return state.filter(a => a.id !== action.author.id);
    default:
      return state;
  }
}
