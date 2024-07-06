import gamepadIcon from '../../assets/images/gamepad.png'
import addIcon from '../../assets/images/add-button.png'
import shoppingCartIcon from '../../assets/images/shopping-cart.png'
import searchIcon from '../../assets/images/search.png'
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { useState } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown = () => setDropdown(prev => !prev)

  return (
    <div className="navbar-container">
      <Link className="icon-container" to="/">
        <img src={gamepadIcon} alt="game pad icon" />
        <h1>Game Haven</h1>
      </Link>

      <div className="search-container">
        <img src={searchIcon} alt="search icon" />
        <input
          type="text"
          className="game-search"
          name="game-search"
          placeholder="Search for a game"
        />

      </div>


      <div className="dropdown-container">
        <button onClick={toggleDropdown}>Quick Navigation</button>
        <div
          className={dropdown ? `active dropdown-content` : `dropdown-content`}
        >
          <Link className="content" onClick={() => setDropdown(false)} to="/play-dice">
            Play Dice
          </Link>
          <Link className="content" onClick={() => setDropdown(false)}>
            Added Games
          </Link>
          <Link className="content" onClick={() => setDropdown(false)}>
            Last 30 Days
          </Link>
          <Link className="content" onClick={() => setDropdown(false)}>
            Best of the year
          </Link>
          <Link className="content" onClick={() => setDropdown(false)}>
            All time top
          </Link>
        </div>
      </div>

      <div className="cart-container">
        <img src={addIcon} alt="add icon" className="add-game" />
        <img
          src={shoppingCartIcon}
          alt="shopping cart icon"
          className="see-cart"
        />
      </div>
    </div>
  );
};

export default Navbar;
