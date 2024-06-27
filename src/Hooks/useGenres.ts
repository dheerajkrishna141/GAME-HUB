import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import Genres from '../Data/Genres';
import APIClient from "../Services/api-client";
import Genre  from "../Entities/Genre";
    interface FetchGenresResponse{
        count: number,
        results: Genre[]
    }
 
     
    const getGenres = new APIClient<Genre>("/genres");
const useGenres=()=> useQuery({
    queryKey: ["genres"],
    queryFn: getGenres.get,
    staleTime: ms("1d"), //24 hours
    initialData: Genres


  });


export default useGenres;
