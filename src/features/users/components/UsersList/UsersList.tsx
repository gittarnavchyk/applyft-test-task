import type { User } from "../../usersSlice";
import UserCard from "../UserCard/UserCard";
import { StyledUsers, NoUsersMessage } from "./styles";

interface UsersListProps {
  users: User[];
}

function UsersList({ users }: UsersListProps) {
  return (
    <>
      {users.length ? (
        <StyledUsers>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </StyledUsers>
      ) : (
        <NoUsersMessage>No users found</NoUsersMessage>
      )}
    </>
  );
}

export default UsersList;
