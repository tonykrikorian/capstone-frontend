import React, { useState, useEffect } from "react";
import "./css/main.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTranslationLanguages } from "../../../actions/shared";
import TranslationPanel from "./TranslationPanel";
import TranslationText from "./TranslationText";
import { translateTextAction } from "../../../actions/TranslationAction";
import TranslationResult from "./TranslationResult";
const Translate = () => {
  const [fromLanguage, setFromLanguage] = useState("");
  const [toLanguage, setToLanguage] = useState("");
  const [translationText, setTranslationText] = useState("");
  const [enableLanguageSelector, setEnableLanguageSelector] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranslationLanguages());
  }, [dispatch]);

  const { data, loading } = useSelector(
    (state) => state.translationLanguagesReducer,
    shallowEqual
  );

  const { data: translationResult, loading: loadingTranslation } = useSelector(
    (state) => state.translationReducer,
    shallowEqual
  );

  const fromLanguageHandler = (language) => {
    setFromLanguage(language);
    console.log(`From language ${language}`);
  };
  const toLanguageHandler = (toLanguage2) => {
    setToLanguage(toLanguage2);
    console.log(`To language ${toLanguage2},toLanguage ${toLanguage}`);

    if (toLanguage2) {
      dispatch(translateTextAction(translationText, fromLanguage, toLanguage2));
    }
  };

  const translationTextHandler = (text) => {
    console.log(`Translation text: ${text}`);
    setTranslationText(text);
    setEnableLanguageSelector(String(text).length < 5);
  };
  return (
    <div className="main-container">
      <header>
        <h1>Udacity Capstone project translator</h1>
      </header>
      <div>
        <p>
          This is the Udacity capstone project, this application was building
          reactJS Frontend and NodeJS Backend
        </p>
        <p>
          The app is deployed in Docker Containers in an AWS EKS Kubernetes
          Cluster
        </p>
      </div>
      <div>{loading && <div>Cargando</div>}</div>
      <div className="language-box">
        {!loading && (
          <TranslationPanel
            languages={data}
            label={"From Language"}
            handlerLanguage={fromLanguageHandler}
            enableLanguageSelector={false}
          />
        )}
      </div>
      <div className="language-box">
        {!loading && (
          <TranslationPanel
            languages={data}
            label={"To Language"}
            handlerLanguage={toLanguageHandler}
            enableLanguageSelector={enableLanguageSelector}
          />
        )}
      </div>
      <div className="clear-fix"></div>

      <div className="language-box">
        <TranslationText
          label={"Text to translate"}
          disabled={false}
          translationTextHandler={translationTextHandler}
        />
      </div>

      <div className="language-box">
        <TranslationResult
          label={"Translated text"}
          translationResult={
            toLanguage !== "undefined" ? translationResult : ""
          }
          loadingTranslation={loadingTranslation}
        />
      </div>
      <div className="clear-fix"></div>
    </div>
  );
};

export default Translate;
