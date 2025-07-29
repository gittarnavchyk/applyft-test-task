import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../components/Spinner";
import NotFound from "../../NotFound";
import type { RootState } from "../../../app/store";
import { UserDetailsView } from "../../../features/users/components/UserDetails/UserDetailsView";

function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state: RootState) => state.users);

  if (loading) return <LoadingSpinner />;

  const user = users.find((u) => u.id === Number(id));
  if (!user) return <NotFound />;

  return <UserDetailsView user={user} onBack={() => navigate("/users")} />;
}

export default UserDetailsPage;
