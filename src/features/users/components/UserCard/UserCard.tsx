import {
  StyledCard,
  TopContent,
  Avatar,
  Info,
  Name,
  ButtonContainer,
  DetailsButton,
} from "./styles";
import type { User } from "../../usersSlice";

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
