"use client";
import { useState, useEffect, useMemo } from "react";
import AxiosClient from "../services/axiosClient";
import { UserData } from "../models/Users";
import { API_COLLECTION, apiPrefix } from "../common";

const useGetUserById = (id: string) => {

  const apiClient = useMemo(() => new AxiosClient("http://localhost:3000/"), []);

  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  type UserDataResponse = { user: UserData };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get<UserDataResponse>(
          `${apiPrefix}${API_COLLECTION.users}${id}`
        );
        setUser(response.data.user);
      } catch (err: unknown) {
        setError("Error fetching user");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id, apiClient]);

  return { user, loading, error };
};

export default useGetUserById;
