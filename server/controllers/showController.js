import axios from "axios"
// 5.28
// API to get now playing movies from TMDB API
export const getNowPlayingMovies = async (req,res)=>{
    try {
        const {data} = await axios.get("https://api.themoviedb.org/3/movie/now_playing",
        {headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}}
    )
            const movies = data.results;
            res.json({success:true,movies:movies})
        
    } catch (error) {
        console.error(error)
 res.json({success:false,message:error.message})
    }
}