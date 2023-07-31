import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import video from "../video/trailer.mov";
function Player() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls></video>
      </div>
    </header>
  );
}

export default Player;
