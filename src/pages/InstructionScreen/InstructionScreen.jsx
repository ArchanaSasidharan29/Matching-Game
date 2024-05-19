import React from "react";
import { useNavigate } from "react-router-dom";
import "./InstructionScreen.css";

const InstructionScreen = () => {
  const navigate = useNavigate();
  const handlePlayClick = () => {
    navigate("/activity");
  };
  const handleBackClick = () => {
    navigate("/intro-screen");
  };

  return (
    <div className="background">
      <img
        src="/src/images/play.png"
        alt="Play Image"
        className="play-image"
        onClick={handlePlayClick}
      />
      <img
        src="/src/images/Group 156.png"
        alt="Back Icon"
        className="back"
        onClick={handleBackClick}
      />

      <div className="top-middle-icons">
        <img src="/src/images/Group 148.png" alt="Icon 1" className="top-bar" />
        <img
          src="/src/images/grey-banana.png"
          alt="Icon 2"
          className="top-banana"
        />
      </div>

      <img
        src="/src/images/Frame 17.png"
        alt="Bottom Image"
        className="bottom-image"
      />
      <img
        src="/src/images/Vector 7.png"
        alt="Below Cards Image"
        className="below-cards-image"
      />
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img
              src="/src/images/pink.png"
              alt="Card Image"
              className="card1-image"
            />
            <img
              src="/src/images/apple-card.png"
              alt="Overlay Image"
              className="overlay-image"
            />
          </div>
          <h1>
            Select a <br /> pink card.
          </h1>

          <p>It has images.</p>
          <img src="/src/images/1.png" alt="Left" className="left1-image" />
        </div>

        <div className="card">
          <img
            src="/src/images/blue.png"
            alt="Card Image"
            className="card2-image"
          />
          <h1>
            Select a<br /> blue card.
          </h1>
          <p>It has alphabets.</p>
          <img src="/src/images/2.png" alt="Left" className="left2-image" />
          <h2 className="left2-image">02</h2>
        </div>

        <div className="card">
          <img
            src="/src/images/card-group.png"
            alt="Card Image"
            className="card3-image"
          />
          <p>It has alphabets.</p>
          <h1>Its a match !</h1>
          <p>otherwise retry :(</p>
          <img src="/src/images/3.png" alt="Left" className="left3-image" />
          <h2 className="left3-image">03</h2>
        </div>
      </div>
    </div>
  );
};

export default InstructionScreen;
