import React from "react";
import { useNavigate } from "react-router-dom";
import "./RewardScreen.css";

const RewardScreen = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate("/");
  };

  const handleBackClick = () => {
    navigate("/activity");
  };

  return (
    <div className="reward-background">
      <div className="middle-reward-container">
        <a onClick={handleOkClick} className="ok-link">
          <img
            src="/src/images/reward.png"
            alt="Reward"
            className="middle-reward"
          />
        </a>
        <img
          src="/src/images/reward_monkey.png"
          alt="Reward Monkey"
          className="reward-monkey"
        />
        <img
          src="/src/images/group_bananas.png"
          alt="Group Bananas"
          className="group-bananas"
        />
      </div>

      <img
        src="/src/images/Group 156.png"
        alt="Back Icon"
        className="back"
        onClick={handleBackClick}
      />
      <div className="top-middle-icons">
        <img
          src="/src/images/reward_full.png"
          alt="Icon 1"
          className="top-bar"
        />
        <img
          src="/src/images/reward_banana.png"
          alt="Icon 2"
          className="top-banana"
        />
      </div>
    </div>
  );
};

export default RewardScreen;
