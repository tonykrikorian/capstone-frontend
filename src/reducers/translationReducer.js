import {
  MAKE_TRANSLATION_INIT,
  MAKE_TRANSLATION_SUCCESS,
  MAKE_TRANSLATION_FAILURE,
} from "../types/translationTypes";

const INITIAL_STATE = {
  loading: false,
  data: [],
  errors: null,
};
function translationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAKE_TRANSLATION_INIT:
      return { ...state, loading: true };
    case MAKE_TRANSLATION_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case MAKE_TRANSLATION_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
}
export default translationReducer;
