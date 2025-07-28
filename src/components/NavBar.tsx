import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f0f0 100%);
  box-shadow: 0 2px 12px rgba(60, 60, 120, 0.08);
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d2d6a;
    letter-spacing: 1px;
    margin: 0;
  }
`;

interface MenuProps {
  $isOpen: boolean;
}

const Menu = styled.div<MenuProps>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    animation: ${slideDown} 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    background: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 16px rgba(60, 60, 120, 0.08);
    margin-top: 0.5rem;
    padding: 1rem 0;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #2d2d6a;
  margin-left: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #4f46e5;
  }

  @media (max-width: 768px) {
    display: block;
    align-self: flex-end;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #2d2d6a;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;
  transition: background 0.2s, color 0.2s;

  &.active,
  &:hover {
    background: #4f46e5;
    color: #fff;
  }
`;

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNav>
      <h1>Applyft</h1>
      <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</Hamburger>
      <Menu $isOpen={isMenuOpen}>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/users">Users</StyledNavLink>
      </Menu>
    </StyledNav>
  );
}

export default NavBar;
