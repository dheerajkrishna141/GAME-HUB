import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../Services/api-client";
import Games  from "../Entities/Games";


const apiClient = new APIClient<Games>("/games");
const useGameDescription=(slug: string)=>{
    

    return useQuery({
        queryKey: ["games",slug],
        queryFn: ()=>apiClient.getDetails(slug),
        staleTime: ms("1d"), // 24 hours
    })
}
export default useGameDescription