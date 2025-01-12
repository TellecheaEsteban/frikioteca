import { TextField } from "@mui/material";
import React from "react";

function TextFieldComponent() {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        sx={{
          width: 200,
        }}
      />
    </div>
  );
}

export default TextFieldComponent;
