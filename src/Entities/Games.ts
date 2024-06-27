import Genre from "./Genre";
import  Platform  from "./Platform";
import  Publisher  from "./Publisher";


 export default interface Games {
  id: number;
  name: string;
  slug: string;
  description: string,
  publishers: Publisher[],
  background_image: string;
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  description_raw: string;
  parent_platforms: { platform: Platform; }[];
}


