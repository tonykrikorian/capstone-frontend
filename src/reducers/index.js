import { combineReducers } from 'redux';
import translationLanguagesReducer from './translationLanguagesReducer';
import translationReducer from './translationReducer';

export default combineReducers({
  translationLanguagesReducer,
  translationReducer,
});
