import {
  GET_CHARACTERS_SUCCESS,
  FETCHING,
  GET_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  fetching: true,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case GET_CHARACTERS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};
