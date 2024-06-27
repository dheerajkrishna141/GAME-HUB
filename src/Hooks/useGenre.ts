import useGenres from "./useGenres";

const useGenre= (id?: number)=>{
    const { data } = useGenres();
    const genre = data?.results.find((g) => g.id === id);
    return genre?.name
}

export default useGenre;