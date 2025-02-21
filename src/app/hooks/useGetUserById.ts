"use client";
import { useState, useEffect } from "react";
import AxiosClient from "../services/axiosClient";
import { UserData } from "../models/Users";
import { API_COLLECTION, api_url, apiPrefix } from "../common";

const apiClient = new AxiosClient(api_url); // Reemplaza con tu baseURL

const useGetUserById = (id: string) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response: any = await apiClient.get(
          `${apiPrefix}${API_COLLECTION.users}${id}`
        );
        setUser(response.data?.user); // Asumiendo que la respuesta tiene un campo 'user'
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
  }, [id]); // El hook se volverá a ejecutar si cambia el id

  return { user, loading, error };
};

export default useGetUserById;
