import "./PlayDice.scss"
import { useState, useEffect } from "react"

const PlayDice = () => {
    const [loading, setLoading] = useState(false)
    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        const getRandomGame = async () => {
            setLoading(true);
            try {
                const randomNum = Math.floor(Math.random() * (200000 - 1 + 1)) + 1;
                const randomGame = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&page_size=1&page=${randomNum}`, {mode: 'cors'});
                const response = await randomGame.json();
                setGameData(response.results);
            } catch (error) {
                console.error("Error fetching the random game:", error);
            } finally {
                setLoading(false);
            }
        };
    
        getRandomGame();

    }, []);

    return 
}

export default PlayDice