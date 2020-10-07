import axios from "axios";
import {
  GET_LANGUAGES_INIT,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
} from "../types/translationLanguageTypes";

export const getTranslationLanguages = () => async (dispatch) => {
  dispatch({ type: GET_LANGUAGES_INIT });

  axios
    .get("http://internal-service.microservices:4000/api/translate/languages")
    .then((response) => {
      console.log(response);
      dispatch({ type: GET_LANGUAGES_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_LANGUAGES_FAILURE, payload: error });
    });
};
