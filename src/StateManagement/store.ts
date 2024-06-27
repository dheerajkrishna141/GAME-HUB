import { create } from "zustand";

 export interface GameQuery {
    genreId?: number ;
    platformId?: number;
    order?: string;
    Search?: string;
  }
interface GameQueryStore{
   gameQuery: GameQuery,
   setSearch: (searchText: string)=>void,
   setGenreId:(genreId: number)=> void,
   setOrder: (order:string) => void,
   setPlatformId:(platformId: number) => void

}

const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery: {},
    setGenreId: (genreId)=>set(store=>({gameQuery:{...store.gameQuery, genreId:genreId}})),
    setOrder: (order) => set(store=>  ({gameQuery:{...store.gameQuery, order:order}})),
    setPlatformId: (platformId) => set((store)=> ({gameQuery:{...store.gameQuery, platformId: platformId}})),
    setSearch: (searchText)=> set(()=>({gameQuery:{Search:searchText}}))
}))

export default useGameQueryStore;