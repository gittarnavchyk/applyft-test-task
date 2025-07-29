import { StyledDetails } from "./styles";
import type { User } from "../../usersSlice";

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
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
      </div>
      <button onClick={onBack}>← Back to Users</button>
    </StyledDetails>
  );
}
