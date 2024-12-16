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
    <div className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <img src="../snackoverflow.png" alt="logo" />
    </div>
  );
}
