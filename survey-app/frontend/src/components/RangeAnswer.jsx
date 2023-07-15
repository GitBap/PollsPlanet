import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import { getColor } from "../utils/getColor";

import "./styles/ui/rangeAnswer.scss";

const RangeAnswer = () => {
  const [count, setCount] = useState(1);

  const primaryColor = getColor("--primary-color");
  const labelInputColor = getColor("--input-label-color");
  const dangerColor = getColor("--danger");
  const warningColor = getColor("--warning");

  return (
    <div className="answer">
      <Slider
        className="answer-range"
        defaultValue={1}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx={{
          color: primaryColor,
          "& .MuiSlider-valueLabelOpen": {
            backgroundColor: labelInputColor,
            width: "0px",
            height: "10px",
          },
        }}
        onChange={(event) => {
          const value = event.target.value;
          setCount(value);
        }}
      />
      <p
        style={{
          color:
            count < 4
              ? dangerColor
              : count >= 4 && count < 8
              ? warningColor
              : primaryColor,
        }}
      >
        {count}
      </p>
    </div>
  );
};

export default RangeAnswer;
