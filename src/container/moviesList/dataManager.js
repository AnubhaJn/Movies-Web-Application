import { GetService } from "../../services/movieServices";

export const HandleGetMovies = async () => {
    const result = await GetService() ;
    return result;
}