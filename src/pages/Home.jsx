import MoviesCard from "../components/MoviesCard";
import "../css/Home.css"
import  {useState, useEffect} from "react"
import { searchMovies, getPopularMovies } from "../services/api";
function Home(){

    const [searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
useEffect(() => {
    const loadPopularMovies = async () => {
        try{
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
        } catch (err) {
            console.log(err)
            setError("Failed to load... extreamly sorry GANDU")
        }
        finally{
            setLoading(false)
        }
    }

    loadPopularMovies()
}, [])

const handelSearch = async (e) => {
 e.preventDefault()
    if(!searchQuery.trim())return
    if(loading)return

     setLoading(true)
    try{
     const searchResults = await searchMovies(searchQuery)
     setMovies(searchResults)
     setError(null)
    } catch (err){
        console.log(err)
      setError("Failed to search movies...")
    } finally{
        setLoading(false)
    }
    setSearchQuery("")
};
return(
    <div className="home">
        <form onSubmit={handelSearch} className="search-from">
            <input type="text" placeholder="Search for movies.." className="search-input"
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}  
            />
            <button type ="submit" className="search-button">Search</button>
        </form>

    {error && <div className="error-message">{error}</div>}

        {loading? <div className="loading">Loading...</div> :<div className="movies-grid"> 
            {movies.map((movie) => (
               <MoviesCard movie={movie} key={movie.id}/>)
                 )}
        </div> }
        
    </div>
);
}
export default Home;