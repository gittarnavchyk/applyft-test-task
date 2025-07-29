import { useState } from "react";
import { StyledNav, Menu, StyledNavLink, MenuButton } from "./styles";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNav role="banner">
      <div className="nav-header">
        <h1>Applyft</h1>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-menu"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? "✕" : "☰"}
        </MenuButton>
      </div>

      <Menu
        id="main-menu"
        $isOpen={isMenuOpen}
        role="navigation"
        aria-label="Main navigation"
      >
        <StyledNavLink
          to="/about"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Open about page"
        >
          About
        </StyledNavLink>
        <StyledNavLink
          to="/users"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Open user list"
        >
          Users
        </StyledNavLink>
      </Menu>
    </StyledNav>
  );
}

export default NavBar;
