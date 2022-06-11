import { useState } from "react";

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  window.addEventListener("scroll", () => {
    setScrollPosition(window.scrollY);
  });

  return (
    <nav className={`navbar ${scrollPosition > 70 ? "fade-in" : "fade-out"}`}>
      <span className="logo">W</span>
      <ul className="link-list">
        <li className="link-item">
          <a href="#home">Home</a>
        </li>
        <li className="link-item">
          <a href="#about">About</a>
        </li>
        <li className="link-item">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
