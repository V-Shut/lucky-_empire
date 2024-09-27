import "./style.css";
import { Link } from "react-router-dom";

const handleScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="logo" />
      <div className="nav">
        <Link to="/" onClick={() => handleScrollTo("games")} className="route">Games</Link>
        <Link to="/" onClick={() => handleScrollTo("terms")} className="route">Terms</Link>
        <Link to="/" onClick={() => handleScrollTo("about")} className="route">About</Link>
        <Link to="/" onClick={() => handleScrollTo("contacts")} className="route">Contacts</Link>
      </div>
    </div>
  );
};
