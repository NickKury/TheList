import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderAllMovies } from "../../store/movie";

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
                    Movie: {movie?.title}
                </div>
            ))}
        </div>
    )
}

export default AllMovies;