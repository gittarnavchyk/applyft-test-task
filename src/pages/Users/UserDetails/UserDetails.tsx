import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Spinner";
import NotFound from "../../NotFound";
import type { RootState, AppDispatch } from "../../../app/store";
import UserDetails from "../../../features/users/components/UserDetails/UserDetails";
import { fetchUsers } from "../../../features/users/usersSlice";
import { useEffect } from "react";

function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (users.length === 0 && !loading) {
      dispatch(fetchUsers());
    }
  }, [dispatch, loading, users.length]);

  if (loading || users.length === 0) {
    return <LoadingSpinner />;
  }

  const user = users.find((u) => u.id === Number(id));
  if (!user) return <NotFound />;

  return <UserDetails user={user} onBack={() => navigate("/users")} />;
}

export default UserDetailsPage;
