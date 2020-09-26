import { Divider, TextareaAutosize, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";

const TranslationText = ({ disabled, translationTextHandler, label }) => {
  const [textTranslation, setTextTranslation] = useState("");

  useEffect(() => {
    translationTextHandler(textTranslation);
  }, [textTranslation]);
  return (
    <div>
      <div>
        <h2>{label}</h2>
      </div>
      <div>
        <TextField
          name="texto01"
          disabled={disabled}
          className="translation-text"
          placeholder={"Enter your text"}
          variant={"outlined"}
          value={textTranslation}
          multiline={true}
          rows={5}
          rowsMax={20}
          onChange={(event) => {
            console.log(event.target.value);
            setTextTranslation(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default TranslationText;
