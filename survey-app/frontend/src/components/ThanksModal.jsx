import React from "react";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

import "./styles/thanksModal.scss";

const ThanksModal = ({ isSetShowModal }) => {
  const navigate = useNavigate();

  const close = () => {
    document.body.style.overflowY = "auto";
    isSetShowModal((prev) => !prev);

    navigate("/");
  };

  return (
    <div
      className="thanks-modal"
      style={{ top: `${document.documentElement.scrollTop}px` }}
      onClick={close}
    >
      <div
        className="wrapper"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <TaskAltOutlinedIcon />
        <h3>Thanks 'UserName' for your time!</h3>
        <p>
          We extend our sincere gratitude for your participation in the survey.
        </p>
        <button onClick={close}>
          <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default ThanksModal;
