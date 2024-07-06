import "./PlayDice.scss";
import { useState, useEffect } from "react";

// Utility function to remove HTML tags
const stripHtmlTags = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const PlayDice = () => {
  const [loading, setLoading] = useState(false);
  const [gameData, setGameData] = useState(null);
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const getRandomGame = async () => {
      setLoading(true);
      try {
        console.log("Fetching game data...");
        const randomNum = Math.floor(Math.random() * (200000 - 1 + 1)) + 1;
        const randomGame = await fetch(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_API_KEY
          }&page_size=1&page=${randomNum}`,
          { mode: "cors" }
        );
        const randomGameResponse = await randomGame.json();

        if (randomGameResponse.results.length > 0) {
          const gameID = randomGameResponse.results[0].id;
          const gameDetails = await fetch(
            `https://api.rawg.io/api/games/${gameID}?key=${
              import.meta.env.VITE_API_KEY
            }`
          );
          const gameDetailsResponse = await gameDetails.json();

          setGameData(randomGameResponse.results);
          setGameDetails(gameDetailsResponse);
        }
      } catch (error) {
        console.error("Error fetching the random game:", error);
      } finally {
        setLoading(false);
      }
    };

    getRandomGame();
  }, []);

  return (
    <div>
      {loading ? (
        <>LOADING!</>
      ) : (
        <div className="play-dice-container">
          <div className="image-gallery-container">
            <button>Return</button>
            <div className="image-gallery"></div>
          </div>

          <div className="game-details-container">
            {gameData && gameData.length > 0 ? (
              <>
                <h2>{gameData[0].name}</h2>
                {gameDetails && (
                  <div className="description">
                    <h3>Description</h3>
                    <p>{stripHtmlTags(gameDetails.description)}</p>
                  </div>
                )}
              </>
            ) : (
              <p>No game data available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayDice;
