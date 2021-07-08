import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllMovies } from "../../store/movie";
import { Link } from "react-router-dom"

const AllMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => Object.values(state.movie))

    useEffect(() => {
        dispatch(renderAllMovies())
    }, [dispatch])

    return(
        <div>
            {movies?.map((movie) => (
                <div key={movie?.id}>
                    <div>
                   <Link to={`/movies/${movie.id}`}> Movie: {movie?.title} </Link>
                   </div>
                    <img src={movie?.poster_path}/>
                </div>
            ))}
        </div>
    )
}

export default AllMovies;