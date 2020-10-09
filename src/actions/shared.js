import axios from "axios";
import {
  GET_LANGUAGES_INIT,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAILURE,
} from "../types/translationLanguageTypes";

export const getTranslationLanguages = () => async (dispatch) => {
  try {
    dispatch({ type: GET_LANGUAGES_INIT });
    const response = await axios.get(
      "http://internal-service.svc.cluster.local/api/translate/languages"
    );
    dispatch({ type: GET_LANGUAGES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_LANGUAGES_FAILURE, payload: error });
  }
};
