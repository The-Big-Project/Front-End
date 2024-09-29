/** @format */

import { useMutation } from "@tanstack/react-query";
import { login as loginAPI, UserResponse } from "../api/userApi";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const {
    isPending,
    mutate: login,
    error,
    isError,
  } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data: UserResponse) => {
      sessionStorage.setItem("accessToken", data?.accessToken as string);
      navigate("/app", { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { isPending, login, error, isError };
}
