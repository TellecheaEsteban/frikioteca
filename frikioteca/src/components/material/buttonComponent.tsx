import React from "react";
import { Button } from "@mui/material";

function ButtonComponent({ content }: { content: string }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          width: 200,
          color: "#475792",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
          backgroundColor: "#FFBB02",
          borderColor: "#FFBB02",
        }}
      >
        {content}
      </Button>
    </div>
  );
}

export default ButtonComponent;
