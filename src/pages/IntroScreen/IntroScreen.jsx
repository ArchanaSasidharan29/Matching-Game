import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroScreen.css";

const IntroScreen = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/intro");
  };

  return (
    <div className="intro-screen">
      <img
        src="/src/images/Group 123.png"
        alt="Start Image"
        className="start-image"
        onClick={handleStartClick}
      />

      <div className="comment-box">
        <img
          src="/src/images/Group 149.png"
          alt="Comment Background"
          className="comment-img"
        />
        <p className="comment-img-text">Welcome Kiddo !</p>
      </div>

      <div className="overlay-img">
        <img
          src="/src/images/Vector 123.png"
          alt="Green Background"
          className="green-image"
        />
        <img
          src="/src/images/Group 153.png"
          alt="Smiling Monkey"
          className="smilingmonkey-image"
        />
      </div>

      <div className="bottom-left-icons">
        <img
          src="/src/images/Cog.png"
          alt="Settings Icon"
          className="icon settings-icon"
        />

        <img
          src="/src/images/Star.png"
          alt="Star Icon"
          className="icon star-icon"
        />
      </div>
    </div>
  );
};

export default IntroScreen;
