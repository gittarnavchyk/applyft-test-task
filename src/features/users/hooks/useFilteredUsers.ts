import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchUsers } from '../usersSlice';
import type { RootState, AppDispatch } from '../../../app/store';
import type { User } from '../usersSlice';

interface UseFilteredUsersReturn {
  users: User[];
  loading: boolean;
  error: string | null;
  query: string;
  setQuery: (query: string) => void;
  totalCount: number;
  filteredCount: number;
}

function useFilteredUsers(): UseFilteredUsersReturn {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (users.length === 0 && !loading) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length, loading]);

  const filteredUsers = useMemo(() => {
    if (!query.trim()) return users;
    
    const searchTerm = query.toLowerCase().trim();
    return users.filter((user: User) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return (
        fullName.includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.username.toLowerCase().includes(searchTerm)
      );
    });
  }, [users, query]);

  useEffect(() => {
    if (error) {
      toast.error(`Failed to load users: ${error}`);
    }
  }, [error]);

  const handleSetQuery = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  return {
    users: filteredUsers,
    loading,
    error,
    query,
    setQuery: handleSetQuery,
    totalCount: users.length,
    filteredCount: filteredUsers.length,
  };
};

export default useFilteredUsers;