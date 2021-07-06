import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderMovieReviews } from "../../store/review";
import DeleteReview from "./DeleteReview";
import EditReview from "./EditReview";


const MovieReviews = (movie) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    console.log("review from movie reviews", movie.id)

    useEffect(() => {
        dispatch(renderMovieReviews(movie?.id))
    }, [dispatch, movie])

    return(
        <div> Movie Reviews
            {reviews?.map((review) => (
                <div key={review.id}>
                    {review?.user_id}
                    {review?.content}
                    <EditReview review={review}/>
                    <DeleteReview review={review}/>
                </div>
            ))}
        </div>
    )
}
export default MovieReviews;