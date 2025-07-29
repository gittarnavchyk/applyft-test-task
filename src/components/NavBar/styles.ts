import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f0f0 100%);
  border: 2px solid #6b7280;
  box-shadow: 0 2px 12px rgba(60, 60, 120, 0.08);
  border-radius: 0.8rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;

    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 0.5rem;
    }
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

export const Menu = styled.div<MenuProps>`
  display: flex;
  gap: 2rem;
  align-items: center;
  animation: ${slideDown} 0.3s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    width: 100%;
    padding-top: 0.5rem;
    border-top: 1px solid #e5e7eb;
    margin-top: 0.5rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #2d2d6a;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.7rem 1.2rem;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  letter-spacing: 0.5px;

  &:hover {
    color: #4f46e5;
  }

  &:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }

  &.active {
    background-color: #6366f1;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    width: 100%;
    text-align: center;
    border-radius: 0.3rem;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: #6366f1;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background: #4f46e5;
  }

  &:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
