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
        <StyledUsers role="list" aria-label={`${users.length} users found`}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </StyledUsers>
      ) : (
        <NoUsersMessage role="status" aria-live="polite">
          No users found
        </NoUsersMessage>
      )}
    </>
  );
}

export default UsersList;
