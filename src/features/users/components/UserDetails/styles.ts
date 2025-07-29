import styled from "styled-components";

export const StyledDetails = styled.div`
  padding: 2.5rem;
  max-width: 600px;
  margin: 2.5rem auto;
  background: #fff;
  border: 2px solid #6b7280;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2d2d6a;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 12px rgba(60, 60, 120, 0.1);
  border: 2px solid #e0e7ff;
`;

export const InfoContainer = styled.div`
  width: 100%;
`;

export const BackButton = styled.button`
  margin-top: 2rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  background: #4f46e5;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(60, 60, 120, 0.08);
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #3730a3;
    transform: translateY(-2px) scale(1.04);
  }

  &:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }
`;

export const InfoItem = styled.p`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

export const Label = styled.strong`
  min-width: 100px;
  flex-shrink: 0;
`;

export const Value = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    color: #2d2d6a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }
`;