import {
  StyledDetails,
  Title,
  Avatar,
  InfoContainer,
  BackButton,
  InfoItem,
  Label,
  Value,
} from "./styles";
import type { User } from "../../usersSlice";

interface UserDetailsProps {
  ref?: React.RefObject<HTMLButtonElement>;
  user: User;
  onBack: () => void;
}

function UserDetails({ ref, user, onBack }: UserDetailsProps) {
  return (
    <StyledDetails>
      <Title>User Details</Title>
      <Avatar
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        loading="lazy"
      />
      <InfoContainer>
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
      </InfoContainer>
      <BackButton ref={ref} onClick={onBack} aria-label="Go back to users list">
        ← Back to Users
      </BackButton>
    </StyledDetails>
  );
}

export default UserDetails;
