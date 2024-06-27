import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../Services/api-client";
import useGameQueryStore from "../StateManagement/store";
import Games  from "../Entities/Games";

  const apiClient = new APIClient<Games>("/games")
const useGames =()=> 

   {
    const gameQuery= useGameQueryStore(s=>s.gameQuery)
    
    return useInfiniteQuery<FetchResponse<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam =1})=>{
       return apiClient.get({
        params: {
        page: pageParam,
        genres: gameQuery?.genreId,
        parent_platforms: gameQuery?.platformId,
        ordering: gameQuery?.order,
        search: gameQuery?.Search
      }
    })
  },
  staleTime: ms("1d"), // 24 hours
  getNextPageParam: (lastPage, allPages)=>{
    return lastPage.next? allPages.length+1: undefined;
  }
   
    
  })}
  
  



export default useGames;