import axios from 'axios';
import {
  GET_LANGUAGES_INIT,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
} from '../types/translationLanguageTypes';

export const getTranslationLanguages = () => async (dispatch) => {
  dispatch({ type: GET_LANGUAGES_INIT });

  axios
    .get(process.env.REACT_APP_GET_LANGUAGES)
    .then((response) => {
      console.log(response);
      dispatch({ type: GET_LANGUAGES_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_LANGUAGES_FAILURE, payload: error });
    });
};
