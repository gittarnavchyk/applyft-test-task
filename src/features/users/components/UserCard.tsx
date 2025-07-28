import { Link } from "react-router-dom";
import styled from "styled-components";
import type { User } from "../usersSlice";

const StyledCard = styled.div`
  border: 1px solid #e0e7ff;
  padding: 1.2rem 1.5rem;
  border-radius: 0.8rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(60, 60, 120, 0.06);
  transition: box-shadow 0.2s, transform 0.2s;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    box-shadow: 0 6px 24px rgba(60, 60, 120, 0.12);
    transform: translateY(-2px) scale(1.02);
  }
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(60, 60, 120, 0.08);
  border: 2px solid #e0e7ff;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  color: #2d2d6a;
  margin: 0 0 0.3rem 0;
`;

const DetailsLink = styled(Link)`
  text-decoration: none;
  color: #4f46e5;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 0.3rem;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #e0e7ff;
    color: #2d2d6a;
  }
`;

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <StyledCard>
      <Avatar src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <Info>
        <Name>
          {user.firstName} {user.lastName}
        </Name>
        <DetailsLink to={`/users/${user.id}`}>View Details</DetailsLink>
      </Info>
    </StyledCard>
  );
}

export default UserCard;
