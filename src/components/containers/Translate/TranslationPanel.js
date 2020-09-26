import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const TranslationPanel = ({ languages, handlerLanguage, label }) => {
  const [language, setLanguage] = useState({});

  useEffect(() => {
    handlerLanguage(language);
  }, [language]);
  return (
    <div>
      <h2>{label}</h2>
      <div>
        <Autocomplete
          size={"small"}
          onChange={(event, value) => {
            console.log(value);

            setLanguage(value.code);
          }}
          options={languages}
          getOptionLabel={(option) => {
            return `${option.name} (${option.nativeName})`;
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={label} variant="outlined" />
          )}
        />
      </div>
    </div>
  );
};

export default TranslationPanel;
