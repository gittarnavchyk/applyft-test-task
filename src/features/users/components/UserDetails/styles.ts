import styled from "styled-components";

export const StyledDetails = styled.div`
  padding: 2.5rem;
  max-width: 600px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d6a;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 12px rgba(60, 60, 120, 0.1);
    border: 2px solid #e0e7ff;
  }

  .info {
    width: 100%;
  }

  p {
    font-size: 1.15rem;
    color: #444;
    margin-bottom: 1.2rem;
    line-height: 1.7;
  }

  button {
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
  }

  button:hover {
    background: #3730a3;
    transform: translateY(-2px) scale(1.04);
  }
`;