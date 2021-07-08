import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderOneMovie } from "../../store/movie";
import AddMovie from "./AddMovie";
import MovieReviews from "./MovieReviews";
import AddReview from "./AddReview";
import './MoviePage.css'

const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie)
    const user = useSelector(state => state.session)
    console.log('user from movie page', user)


    useEffect(() => {
        dispatch(renderOneMovie(id))
    }, [dispatch, id])

    return(
        <div className='movie-page'> 
            <div>
                <img className='movie-poster' src={movie?.poster_path} />
            </div>
            <div className='movie-info'>
             <div>
                <p className='movie-title'>movie title: {movie?.title}</p>
            </div>
             <div>
                <p className='movie-description'>movie description: {movie?.description}</p>
            </div>
             <div>
                <p className='movie-platform'>movie platform: {movie?.platform}</p>
            </div>
            {user.user !== null
            ?
                <div className='add-movie'>
                    <AddMovie movie={movie}/>
                </div>
            : null}
            </div>
            <div className='review-div'>
                {user.user !== null
                ?
                    <div >
                        <AddReview movie={movie}/>
                    </div>
                : null}
                <div>
                    <MovieReviews id={movie.id}/>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;