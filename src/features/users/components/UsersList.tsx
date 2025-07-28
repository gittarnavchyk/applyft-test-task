import type { User } from "../usersSlice";
import UserCard from "./UserCard";
import styled from "styled-components";

const StyledUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const NoUsersMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  font-size: 1.5rem;
`;

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
