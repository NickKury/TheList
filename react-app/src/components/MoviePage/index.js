import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneMovie } from "../../store/movie";
import AddMovie from "./AddMovie";
import MovieReviews from "./MovieReviews";


const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie)


    useEffect(() => {
        dispatch(renderOneMovie(id))
    }, [dispatch, id])

    return(
        <div> Movie Page
            <p>movie title: {movie?.title}</p>
            <p>movie description: {movie?.description}</p>
            <p>movie platform: {movie?.platform}</p>
            <div>
            <AddMovie movie={movie}/>
            </div>
            <div>
            <MovieReviews id={movie.id}/>
            </div>
        </div>
    )
}

export default MoviePage;