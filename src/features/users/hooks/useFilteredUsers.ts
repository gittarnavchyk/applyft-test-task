import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../usersSlice';
import type { RootState, AppDispatch } from '../../../app/store';
import { toast } from 'react-toastify';
import type { User } from '../usersSlice';

export const useFilteredUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (users.length === 0 ) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  // Filter users locally
  const filteredUsers = useMemo(() => {
    if (!query) return users;
    
    const searchTerm = query.toLowerCase();
    return users.filter((user: User) => 
      user.firstName.toLowerCase().includes(searchTerm) ||
      user.lastName.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
    );
  }, [users, query]);

  // Handle errors
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return {
    users: filteredUsers,
    loading,
    setQuery
  };
};