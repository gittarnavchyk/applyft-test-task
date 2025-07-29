import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Spinner/Spinner";
import NotFound from "../../NotFound/NotFound";
import type { RootState, AppDispatch } from "../../../app/store";
import UserDetails from "../../../features/users/components/UserDetails/UserDetails";
import { fetchUsers } from "../../../features/users/usersSlice";
import { useEffect, useRef } from "react";

function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);
  const ref = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    if (!users.length && !loading) {
      dispatch(fetchUsers());
    }
  }, [dispatch, loading, users.length]);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  if (loading || !users.length) {
    return <LoadingSpinner />;
  }

  const user = users.find((user) => user.id === Number(id));
  if (!user) return <NotFound />;

  return (
    <UserDetails ref={ref} user={user} onBack={() => navigate("/users")} />
  );
}

export default UserDetailsPage;
