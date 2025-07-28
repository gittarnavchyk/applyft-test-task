import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/users/usersSlice";
import LoadingSpinner from "../../components/Spinner";
import { toast } from "react-toastify";
import Users from "../../features/users/components/UsersList";
import type { RootState, AppDispatch } from "../../app/store";
import SearchUser from "../../features/users/components/SearchUser";

function UsersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const [query, setQuery] = useState<string>("");

  // Debounce logic
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Clear previous debounce
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      dispatch(fetchUsers(query));
    }, 500);

    // Cleanup on unmount
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [dispatch, query]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <SearchUser loading={loading} onSearch={setQuery} />
      {loading ? <LoadingSpinner /> : <Users users={users} />}
    </>
  );
}

export default UsersPage;
