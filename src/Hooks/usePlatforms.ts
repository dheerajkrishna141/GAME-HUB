import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/Platforms";
import APIClient from "../Services/api-client";
import ms from "ms";
import Platform  from "../Entities/Platform";

const usePlatforms=()=>{

   const apiClient = new APIClient<Platform>("/platforms/lists/parents")
   //return useData<Platform>("/platforms/lists/parents")
   return useQuery({
      queryKey: ["platforms"],
      queryFn: apiClient.get,
      staleTime: ms("1d"), //24 hours
      initialData: platforms
   })
}

export default usePlatforms