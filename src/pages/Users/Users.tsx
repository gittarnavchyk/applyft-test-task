import useFilteredUsers from "../../features/users/hooks/useFilteredUsers";
import LoadingSpinner from "../../components/Spinner/Spinner";
import Users from "../../features/users/components/UsersList/UsersList";
import SearchUser from "../../features/users/components/SearchUser/SearchUser";

function UsersPage() {
  const { users, loading, setQuery } = useFilteredUsers();

  return (
    <>
      <SearchUser onSearch={setQuery} />
      {loading ? <LoadingSpinner /> : <Users users={users} />}
    </>
  );
}

export default UsersPage;
