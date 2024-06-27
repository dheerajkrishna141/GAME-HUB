import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import usePlatforms from "./usePlatforms";

const usePlatform = ( id?: number)=>{

    const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === id);
    return platform?.name

}

export default usePlatform;