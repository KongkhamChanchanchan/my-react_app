import "./NavBar.css";

const NavBar = () => {
  const Item = "Home";

  return (
    <ul className="navbar">
      <li className="navlist">
        <a className="navitems" href="#home">
          {Item}
        </a>
      </li>
      <li className="navlist">
        <a className="navitems" href="#news">
          News
        </a>
      </li>
      <li className="navlist">
        <a className="navitems" href="#contact">
          Contact
        </a>
      </li>
      <li className="navlist">
        <a className="navitems" href="#about">
          About
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
