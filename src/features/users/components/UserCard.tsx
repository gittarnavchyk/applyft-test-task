import { Link } from "react-router-dom";
import styled from "styled-components";
import type { User } from "../usersSlice";

const StyledCard = styled.div`
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0 2px 12px rgba(60, 60, 120, 0.12);
  transition: box-shadow 0.2s, transform 0.2s;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 8px 32px rgba(60, 60, 120, 0.2);
    transform: translateY(-2px) scale(1.02);
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e7ff;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(60, 60, 120, 0.15);
  border: 2px solid #e0e7ff;
  loading: lazy;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: #2d2d6a;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailsButton = styled(Link)`
  display: inline-block;
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
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
`;

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <StyledCard>
      <TopContent>
        <Avatar src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <Info>
          <Name>
            {user.firstName} {user.lastName}
          </Name>
        </Info>
      </TopContent>
      <ButtonContainer>
        <DetailsButton to={`/users/${user.id}`}>View Details</DetailsButton>
      </ButtonContainer>
    </StyledCard>
  );
}

export default UserCard;
