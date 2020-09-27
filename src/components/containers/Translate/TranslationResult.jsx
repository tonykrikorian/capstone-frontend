import React from "react";
import { TextField } from "@material-ui/core";
const ranslationResult = ({ translationResult, label, loadingTranslation }) => {
  return (
    <div>
      <div>
        <h3>{label}</h3>
      </div>
      <div>
        <TextField
          fullWidth
          aria-readonly
          className="translation-text"
          variant={"outlined"}
          value={translationResult.text}
          multiline={true}
          rows={5}
          rowsMax={20}
          placeholder={loadingTranslation ? "Traduciendo......" : ""}
        />
      </div>
    </div>
  );
};

export default ranslationResult;
