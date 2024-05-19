import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroScreen2.css";

const IntroScreen2 = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/intro-screen");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="intro-screen">
      <img
        src="/src/images/next.png"
        alt="Next Image"
        className="next-image"
        onClick={handleNextClick}
      />
      <div className="comment-container">
        <img
          src="/src/images/Group 156.png"
          alt="Back Icon"
          className="back-icon"
          onClick={handleBackClick}
        />
        <img
          src="/src/images/Group 149.png"
          alt="Comment Background"
          className="comment-image"
        />

        <p className="comment-text">Hi , I am Mizo !</p>
        <div className="comment-with-image">
          <p className="comment-text1">and I love bananas</p>
          <img
            src="/src/images/Group 155.png"
            alt="Banana"
            className="banana-image"
          />
        </div>
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

export default IntroScreen2;
