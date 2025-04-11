import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useUpdateDashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateDashboard"],
    mutationFn: async (id: string) => {
      const url: string = `/unknown/${id}`;
      return await axiosInstance.put(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      navigate("/dashboard");
      toast.success("Data has been updated");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.error);
    },
  });
};

export default useUpdateDashboard;
