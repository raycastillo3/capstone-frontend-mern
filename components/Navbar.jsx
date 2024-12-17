import "../styles/navbar.css"
import { useState, useEffect } from "react";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      setShowNavbar(false);
    } else if (currentScrollPos > prevScrollPos) {
      setShowNavbar(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
      <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
          <div className="logo"> <img src="../snackoverflow.png" alt="logo" /></div>
          <div className="nav-buttons">
            <button className="nav-btn log-in">Log in</button>
            <button className="nav-btn sign-up">Sign up</button>
          </div>
        </nav>
  );
}
