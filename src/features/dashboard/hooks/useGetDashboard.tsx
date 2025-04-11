import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";

const useGetDashboard = () => {
  const url: string = "/unknown";
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => axiosInstance.get(url),
  });
};

export default useGetDashboard;
