import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";
import Cookies from "universal-cookie";

const useLogin = () => {
  const url: string = "/login";
  const navigate = useNavigate();
  const cookies = new Cookies();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (paylod: ILoginPayload) => {
      return await axiosInstance.post(url, paylod);
    },
    onSuccess: (data) => {
      cookies.set("token", data.data.token);
      navigate("/dashboard");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.error);
    },
  });
};

export default useLogin;
