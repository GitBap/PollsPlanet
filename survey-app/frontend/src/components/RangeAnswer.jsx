import React, { useState } from "react";
import Slider from "@mui/material/Slider";

import { getColor } from "../utils/getColor";

import "./styles/ui/rangeAnswer.scss";

const RangeAnswer = ({ onGetAnswerValue }) => {
  const [count, setCount] = useState(1);

  const primaryColor = getColor("--primary-color");
  const labelInputColor = getColor("--input-label-color");
  const dangerColor = getColor("--danger");
  const warningColor = getColor("--warning");

  const handleCountChange = (event) => {
    const value = event.target.value;
    setCount(value);
    onGetAnswerValue(value);
  };

  return (
    <div className="answer">
      <Slider
        className="answer-range"
        defaultValue={1}
        value={count}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        sx={{
          color:
            count < 4
              ? dangerColor
              : count >= 4 && count < 8
              ? warningColor
              : primaryColor,
          "& .MuiSlider-valueLabelOpen": {
            backgroundColor: labelInputColor,
            width: "0px",
            height: "10px",
          },
        }}
        onChange={handleCountChange}
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
