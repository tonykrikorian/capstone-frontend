import React from "react";
import { TextField } from "@material-ui/core";
const ranslationResult = ({ translationResult, label }) => {
  return (
    <div>
      <div>
        <h2>{label}</h2>
      </div>
      <div>
        <TextField
          disabled
          className="translation-text"
          variant={"outlined"}
          value={translationResult.text}
          multiline={true}
          rows={5}
          rowsMax={20}
        />
      </div>
    </div>
  );
};

export default ranslationResult;
