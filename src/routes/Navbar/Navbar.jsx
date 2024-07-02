import gamepadIcon from '../../assets/images/gamepad.png'
import addIcon from '../../assets/images/add-button.png'
import shoppingCartIcon from '../../assets/images/shopping-cart.png'
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

      <input
        type="text"
        className="game-search"
        name="game-search"
        placeholder="Search for a game"
      />
      
      <div className="dropdown-container">
        <button onClick={toggleDropdown}>Quick Navigation</button>
        <div className={dropdown ? `active dropdown-content` : `dropdown-content`} >
          <Link className="content">Play Dice</Link>
          <Link className="content">Added Games</Link>
          <Link className="content">Last 30 Days</Link>
          <Link className="content">Best of the year</Link>
          <Link className="content">All time top</Link>
        </div>
      </div>


      <div className="cart-container">
        <img src={addIcon} alt="add icon" className='add-game'/>
        <img src={shoppingCartIcon} alt="shopping cart icon" className='see-cart'/>
      </div>
    </div>
  );
};

export default Navbar;
