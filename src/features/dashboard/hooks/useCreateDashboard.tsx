import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useCreateDashboard = () => {
  const url: string = `/unknown`;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      return await axiosInstance.post(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      navigate("/dashboard");
      toast.success("Data has been created");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.error);
    },
  });
};

export default useCreateDashboard;
