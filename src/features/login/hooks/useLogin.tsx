import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useLogin = () => {
  const url: string = "/login";
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async (paylod: ILoginPayload) => {
      return await axiosInstance.post(url, paylod);
    },
    onSuccess: () => {
      navigate("/dashboard");
    },
    onError: (error: AxiosError<any>) => {
      console.log(error.response?.data.error);
      toast.error(error.response?.data.error);
    },
  });
};

export default useLogin;
