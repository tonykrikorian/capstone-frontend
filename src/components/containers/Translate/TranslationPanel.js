import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const TranslationPanel = ({
  languages,
  handlerLanguage,
  label,
  enableLanguageSelector,
}) => {
  const [language, setLanguage] = useState({});

  useEffect(() => {
    handlerLanguage(language);
  }, [language]);
  return (
    <>
      <h3>{label}</h3>
      <Autocomplete
        fullWidth
        disabled={enableLanguageSelector}
        size={"small"}
        onChange={(event, value) => {
          console.log(value);

          setLanguage(value?.code);
        }}
        options={languages}
        getOptionLabel={(option) => {
          return `${option.name} (${option.nativeName})`;
        }}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="outlined" />
        )}
      />
    </>
  );
};

export default TranslationPanel;
