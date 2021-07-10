import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllMovies } from "../../store/movie";
import { Link } from "react-router-dom"
import AddMovie from "../MoviePage/AddMovie"

const AllMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => Object.values(state.movie))
    const user = useSelector(state => state.session)

    useEffect(() => {
        dispatch(renderAllMovies())
    }, [dispatch])

    return(
        <div>
            {movies?.map((movie) => (
                <div key={movie?.id} className='all-movies'>
                    <img src={movie?.poster_path} alt={movie.title}/>
                    <div>
                   <Link to={`/movies/${movie.id}`}>{movie?.title} </Link>
                   {user.user !== null
                ?
                    <>
                        <AddMovie movie={movie}/>
                    </>
                : null}
                   </div>
                </div>
            ))}
        </div>
    )
}

export default AllMovies;