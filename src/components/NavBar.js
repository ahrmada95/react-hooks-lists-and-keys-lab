import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key="nav-home" href="#home">home</a>
      <a key="nav-about" href="#about">about</a>
      <a key="nav-projects" href="#projects">projects</a>
    </nav>
  )
}

export default NavBar;
