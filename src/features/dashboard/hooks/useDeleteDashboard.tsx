import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

const useDeleteDashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteDashboard"],
    mutationFn: async (id: number) => {
      const url: string = `/unknown/${id}`;
      return await axiosInstance.delete(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
      navigate("/dashboard");
      toast.success("Data has been deleted");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.error);
    },
  });
};

export default useDeleteDashboard;
