"use client";
import { useState, useEffect } from "react";
import AxiosClient from "../services/axiosClient";
import { UserData } from "../models/Users";
import { API_COLLECTION, api_url, apiPrefix } from "../common";
import { useSearchParams } from "next/navigation";

const useGetUserById = (id: string) => {
  console.log("id", id);
  const apiClient = new AxiosClient("http://localhost:3000/"); // Reemplaza con tu baseURL
  console.log("using this url", api_url);
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const searchParams = useSearchParams();
  // const searchId = searchParams.get("id");

  useEffect(() => {
    console.log("The url", `${apiPrefix}${API_COLLECTION.users}${id}`);
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
