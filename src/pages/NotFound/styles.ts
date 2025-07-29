import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNotFound = styled.div`
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 2.5rem auto;
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
`;

export const Message = styled.p`
  margin: 0 0 2rem 0;
  font-size: 1rem;
  color: #666;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.4rem 1rem;
  background: #4f46e5;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #3730a3;
  }

  &:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }
`;
