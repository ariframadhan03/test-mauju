import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";

const useGetDashboardDetail = (id: string) => {
  const url: string = `/unknown/${id}`;
  return useQuery({
    queryKey: ["dashboard", id],
    queryFn: async () => axiosInstance.get(url),
  });
};

export default useGetDashboardDetail;
