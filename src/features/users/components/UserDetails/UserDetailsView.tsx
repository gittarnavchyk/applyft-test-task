import { StyledDetails } from "./styles";
import type { User } from "../../usersSlice";
import styled from "styled-components";

const InfoItem = styled.p`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const Label = styled.strong`
  min-width: 100px;
  flex-shrink: 0;
`;

const Value = styled.span`
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

interface UserDetailsViewProps {
  user: User;
  onBack: () => void;
}

export function UserDetailsView({ user, onBack }: UserDetailsViewProps) {
  return (
    <StyledDetails>
      <h2>User Details</h2>
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="avatar"
      />
      <div className="info">
        <InfoItem>
          <Label>First Name:</Label>
          <Value>{user.firstName}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Last Name:</Label>
          <Value>{user.lastName}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Username:</Label>
          <Value>{user.username}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Email:</Label>
          <Value>{user.email}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Phone:</Label>
          <Value>{user.phone}</Value>
        </InfoItem>
        <InfoItem>
          <Label>Age:</Label>
          <Value>{user.age}</Value>
        </InfoItem>
      </div>
      <button onClick={onBack}>← Back to Users</button>
    </StyledDetails>
  );
}
