import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderMovieReviews } from "../../store/review";


const MovieReviews = (movie) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    console.log("review from movie reviews", movie.id)
    useEffect(() => {
        dispatch(renderMovieReviews(movie.id))
    }, [dispatch])

    return(
        <div> Movie Reviews
            {reviews?.map((review) => (
                <div key={review.id}>
                    {review?.id}
                </div>
            ))}
        </div>
    )
}
export default MovieReviews;