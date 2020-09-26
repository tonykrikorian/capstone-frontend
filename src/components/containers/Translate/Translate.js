import React, { useState, useEffect } from "react";
import "./css/main.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTranslationLanguages } from "../../../actions/shared";
import TranslationPanel from "./TranslationPanel";
import TranslationText from "./TranslationText";
import { Button } from "@material-ui/core";
const Translate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranslationLanguages());
  }, [dispatch]);

  const { data, loading } = useSelector(
    (state) => state.translationLanguagesReducer,
    shallowEqual
  );

  const fromLanguageHandler = (language) => {
    console.log(`From language ${language}`);
  };
  const toLanguageHandler = (language) => {
    console.log(`To language ${language}`);
  };

  return (
    <div className="main-container">
      <header>
        <h1>Udacity Capstone project translator</h1>
      </header>
      <section>
        <p>
          This is the Udacity capstone project, this application was building
          reactJS Frontend and NodeJS Backend
        </p>
        <p>
          The app is deployed in Docker Containers in an AWS EKS Kubernetes
          Cluster
        </p>
      </section>
      <section>{loading && <div>Cargando</div>}</section>
      <section>
        {!loading && (
          <TranslationPanel
            languages={data}
            label={"From Language"}
            handlerLanguage={fromLanguageHandler}
          />
        )}
      </section>
      <section>
        {!loading && (
          <TranslationPanel
            languages={data}
            label={"To Language"}
            handlerLanguage={toLanguageHandler}
          />
        )}
      </section>
      <section>
        <TranslationText disabled={false} />
      </section>
      <section>
        <TranslationText label={"Translated text"} disabled={true} />
      </section>
      <section>
        <Button variant={"outlined"} color={"primary"}>
          Translate
        </Button>
      </section>
    </div>
  );
};

export default Translate;
