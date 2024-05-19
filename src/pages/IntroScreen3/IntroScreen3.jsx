import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroScreen3.css";

const IntroScreen3 = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/instruction");
  };

  const handleBackClick = () => {
    navigate("/intro");
  };

  return (
    <div className="intro-screen">
      <img
        src="/src/images/yes.png"
        alt="Next Image"
        className="next-image"
        onClick={handleYesClick}
      />
      <div className="comment-container">
        <img
          src="/src/images/Group 156.png"
          alt="Back Icon"
          className="back-icon"
          onClick={handleBackClick}
        />
        <img
          src="/src/images/comment.png"
          alt="Comment Background"
          className="comment-image"
        />

        <p className="comment-text">Can you help me get</p>

        <p className="comment-text1"> some ? </p>
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
      <div className="top-middle-icons">
        <img src="/src/images/Group 148.png" alt="Icon 1" className="top-bar" />
        <img
          src="/src/images/grey-banana.png"
          alt="Icon 2"
          h
          className="top-banana"
        />
      </div>
    </div>
  );
};

export default IntroScreen3;
