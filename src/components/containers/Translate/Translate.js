import React, { useState, useEffect } from "react";
import "./css/main.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTranslationLanguages } from "../../../actions/shared";
const Translate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTranslationLanguages());
  }, [dispatch]);

  const { data, loading } = useSelector(
    (state) => state.translationLanguagesReducer,
    shallowEqual
  );
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
    </div>
  );
};

export default Translate;
