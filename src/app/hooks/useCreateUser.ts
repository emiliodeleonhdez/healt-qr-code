import { useCallback, useMemo, useState } from 'react';
import AxiosClient from '../services/axiosClient';
import { API_COLLECTION, apiPrefix } from '../common';
import { UserData } from '../models/Users';

const useCreateUser = () => {
  const apiClient = useMemo(() => new AxiosClient(), []);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = useCallback(
    async (userData: UserData) => {
      console.log('User data', userData);
      setLoading(true);
      setError(null);
      try {
        const res = await apiClient.post<UserData>(
          `${apiPrefix}${API_COLLECTION.users}`,
          userData
        );
        setUser(res.data);
        return res.data;
      } catch (err) {
        console.error('Error creating user', err);
        setError('Error creating user');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiClient]
  );

  return { createUser, user, loading, error };
};

export default useCreateUser;
