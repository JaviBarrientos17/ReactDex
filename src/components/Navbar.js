import React from "react";
import FavoriteContext from "../contexts/favoritesContext";
import Logo from "../assets/ReactDex.png";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div />
      <div>
        <img src={Logo} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <span role="img" aria-label="heartEmoji">&#10084;&#65039; {favoritePokemons.length}</span>
    </nav>
  );
};

export default Navbar;