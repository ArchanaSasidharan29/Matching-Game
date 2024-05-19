import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ActivityScreen.css";

const fruitImages = [
  "src/images/apple.png",
  "src/images/mango.png",
  "src/images/strawberry.png",
  "src/images/kiwi.png",
  "src/images/papaya.png",
  "src/images/orange.png",
];

const alphabetImages = [
  "src/images/A.png",
  "src/images/M.png",
  "src/images/S.png",
  "src/images/K.png",
  "src/images/P.png",
  "src/images/O.png",
];

const shuffleArray = array => {
  let shuffledArray = array.slice(); // Create a copy of the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ActivityScreen = () => {
  const navigate = useNavigate();

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [matchImages, setMatchImages] = useState(null);
  const [shuffledFruitImages, setShuffledFruitImages] = useState([]);
  const [shuffledAlphabetImages, setShuffledAlphabetImages] = useState([]);

  useEffect(() => {
    setShuffledFruitImages(shuffleArray(fruitImages));
    setShuffledAlphabetImages(shuffleArray(alphabetImages));
  }, []);

  const handleBackClick = () => {
    navigate("/instruction");
  };

  const handleNextPageClick = () => {
    navigate("/reward"); // Navigate to the next page
  };

  const handleCardClick = (type, index) => {
    if (
      flippedCards.length === 2 ||
      matchedCards.some(card => card.index === index && card.type === type)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, { type, index }];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstCard, secondCard] = newFlippedCards;

      const fruitToAlphabetMap = {
        "src/images/apple.png": "src/images/A.png",
        "src/images/mango.png": "src/images/M.png",
        "src/images/strawberry.png": "src/images/S.png",
        "src/images/kiwi.png": "src/images/K.png",
        "src/images/papaya.png": "src/images/P.png",
        "src/images/orange.png": "src/images/O.png",
      };

      const isMatch =
        (firstCard.type === "pink" &&
          fruitToAlphabetMap[shuffledFruitImages[firstCard.index]] ===
            shuffledAlphabetImages[secondCard.index]) ||
        (firstCard.type === "blue" &&
          fruitToAlphabetMap[shuffledFruitImages[secondCard.index]] ===
            shuffledAlphabetImages[firstCard.index]);

      if (isMatch) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setMatchImages([
          shuffledFruitImages[
            firstCard.type === "pink" ? firstCard.index : secondCard.index
          ],
          shuffledAlphabetImages[
            firstCard.type === "blue" ? firstCard.index : secondCard.index
          ],
        ]);
        setTimeout(() => {
          setMatchImages(null);
        }, 1000);
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="activity-background">
      <div className="transparent-div">
        <div className="card-select">
          <img src="src/images/Vector 224.png" alt="" className="vector-img" />
          <img
            src="src/images/Group 149.png"
            alt=""
            className="card-select-img1"
          />
          <p className="card-select-text">Select a card.</p>
        </div>

        <div className="bottom-card-select">
          <img
            src="src/images/comment-2.png"
            alt=""
            className="bottom-card-select-img"
          />
          <p className="bottom-card-select-text">
            Now select <br />
            second card.
          </p>
          <img src="src/images/arrow.png" alt="" className="arrow-img" />
        </div>

        <img
          src="/src/images/Group 156.png"
          alt="Back Icon"
          className="back"
          onClick={handleBackClick}
        />
        <div className="top-icons">
          <img
            src="/src/images/Group 148.png"
            alt="Icon 1"
            className="top-statusbar"
          />
          <img
            src="/src/images/grey-banana.png"
            alt="Icon 2"
            className="top-statusbar-banana"
          />
        </div>
        <a onClick={handleNextPageClick} className="next-page-link">
          <img
            src="/src/images/next.png"
            alt="Next Page"
            className="next-page-image"
          />
        </a>
      </div>

      <div className="image-grid">
        <div className="pink-images">
          {shuffledFruitImages.map((image, index) => (
            <img
              key={index}
              src={
                flippedCards.some(
                  card => card.index === index && card.type === "pink"
                ) ||
                matchedCards.some(
                  card => card.index === index && card.type === "pink"
                )
                  ? image
                  : "/src/images/pink.png"
              }
              alt={`Pink Image ${index + 1}`}
              className="pink-image"
              onClick={() => handleCardClick("pink", index)}
            />
          ))}
        </div>
        <div className="blue-images">
          {shuffledAlphabetImages.map((image, index) => (
            <img
              key={index}
              src={
                flippedCards.some(
                  card => card.index === index && card.type === "blue"
                ) ||
                matchedCards.some(
                  card => card.index === index && card.type === "blue"
                )
                  ? image
                  : "/src/images/blue.png"
              }
              alt={`Blue Image ${index + 1}`}
              className="blue-image"
              onClick={() => handleCardClick("blue", index)}
            />
          ))}
        </div>
      </div>

      {matchImages && (
        <div className="match-image">
          <div className="match-content">
            <p>It's a match!</p>
            {matchImages.map((image, index) => (
              <img key={index} src={image} alt="Matched" />
            ))}
          </div>
        </div>
      )}

      <img
        src="/src/images/Frame 17.png"
        alt="Bottom Image"
        className="bottom-image"
      />
    </div>
  );
};

export default ActivityScreen;
