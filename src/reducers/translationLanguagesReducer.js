import { Switch } from 'react-router-dom';
import {
  GET_LANGUAGES_FAILURE,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_INIT,
} from '../types/translationLanguageTypes';

const INITIAL_STATE = {
  loading: false,
  data: [],
  errors: null,
};

function translationLanguagesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_LANGUAGES_INIT:
      return { ...state, loading: true };
    case GET_LANGUAGES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_LANGUAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
}

export default translationLanguagesReducer;
