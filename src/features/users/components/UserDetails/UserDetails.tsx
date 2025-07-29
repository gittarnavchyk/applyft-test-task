import { StyledDetails, InfoItem, Label, Value } from "./styles";
import type { User } from "../../usersSlice";

interface UserDetailsProps {
  user: User;
  onBack: () => void;
}

function UserDetails({ user, onBack }: UserDetailsProps) {
  return (
    <StyledDetails>
      <h2>User Details</h2>
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="avatar"
        loading="lazy"
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

export default UserDetails;
