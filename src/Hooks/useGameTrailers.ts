import { StatLabel } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Games from "../Entities/Games";
import GameTrailer  from "../Entities/GameTrailer";
import APIClient, { FetchResponse } from "../Services/api-client"



const useGameTrailers=(id: number)=>{
    const apiClient = new APIClient<GameTrailer>(`/games/${id}/movies`);
    return useQuery<FetchResponse<GameTrailer>, Error>({
        queryKey: ["trailers",id],
        queryFn: apiClient.get
        ,
        staleTime: ms("1d")  //24 hrs
    })
}

export default useGameTrailers