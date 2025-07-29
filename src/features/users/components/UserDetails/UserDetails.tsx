import { forwardRef } from "react";
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
  user: User;
  onBack: () => void;
}

const UserDetails = forwardRef<HTMLButtonElement, UserDetailsProps>(
  ({ user, onBack }, ref) => {
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
        <BackButton
          ref={ref}
          onClick={onBack}
          aria-label="Go back to users list"
        >
          ← Back to Users
        </BackButton>
      </StyledDetails>
    );
  }
);

UserDetails.displayName = "UserDetails";

export default UserDetails;
