import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import GameScreenshots  from "../Entities/GameScreenshots";
import APIClient, { FetchResponse } from "../Services/api-client"



const useGameScreenshots=(id:number)=>{
const apiClient = new APIClient<GameScreenshots>(`/games/${id}/screenshots`);
return useQuery<FetchResponse<GameScreenshots>, Error>({
    queryKey: ["screenshots", id],
    queryFn: apiClient.get,
    staleTime: ms("1d") //24hrs
})

}

export default useGameScreenshots