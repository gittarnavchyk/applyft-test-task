import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Spinner";
import NotFound from "../../NotFound";
import styled from "styled-components";
import type { RootState, AppDispatch } from "../../../app/store";
import { fetchUsers, type User } from "../../../features/users/usersSlice";
import axios from "axios";

const StyledDetails = styled.div`
  padding: 2.5rem;
  max-width: 600px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d6a;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 12px rgba(60, 60, 120, 0.1);
    border: 2px solid #e0e7ff;
  }

  .info {
    width: 100%;
  }

  p {
    font-size: 1.15rem;
    color: #444;
    margin-bottom: 1.2rem;
    line-height: 1.7;
  }

  button {
    margin-top: 2rem;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;
    border: none;
    background: #4f46e5;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(60, 60, 120, 0.08);
    transition: background 0.2s, transform 0.2s;
  }

  button:hover {
    background: #3730a3;
    transform: translateY(-2px) scale(1.04);
  }
`;

function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  const [user, setUser] = useState<User | null>(null);
  const [localLoading, setLocalLoading] = useState(false);

  useEffect(() => {
    // If users aren't fetched, fetch them first
    if (!users.length && !loading) {
      dispatch(fetchUsers(""));
    }
  }, [dispatch, users.length, loading]);

  useEffect(() => {
    if (id) {
      setLocalLoading(true);
      axios
        .get(`https://dummyjson.com/users/${id}`)
        .then((res) => setUser(res.data))
        .catch(() => setUser(null))
        .finally(() => setLocalLoading(false));
    }
  }, [id]);

  if (loading || localLoading) return <LoadingSpinner />;

  // Check if user exists in users list (if fetched)
  const userExists =
    users.length > 0 ? users.some((u) => u.id === Number(id)) : user !== null;

  if (!userExists || !user) return <NotFound />;

  return (
    <StyledDetails>
      <h2>User Details</h2>
      <img
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        className="avatar"
      />
      <div className="info">
        <p>
          <strong>First Name:</strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
      </div>
      <button onClick={() => navigate("/users")}>← Back to Users</button>
    </StyledDetails>
  );
}

export default UserDetailsPage;
