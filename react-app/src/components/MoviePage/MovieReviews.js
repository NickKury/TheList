import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { renderMovieReviews } from "../../store/review";
import DeleteReview from "./DeleteReview";
import EditReview from "./EditReview";


const MovieReviews = (movie) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    const user = useSelector(state => state.session) //current user
    console.log("review from movie reviews", user.user?.id, reviews[0]?.user.id)

    useEffect(() => {
        dispatch(renderMovieReviews(movie?.id))
    }, [dispatch, movie])

    return(
        <div> Movie Reviews
            {reviews?.map((review) => (
                <div key={review.id}>
                    <p>{review?.user.username}</p>
                    {review?.content}
                    {user.user.id === review.user.id
                    ? <div>
                    <EditReview review={review}/>
                    <DeleteReview review={review}/>
                    </div>
                    : null}
                </div>
            ))}
        </div>
    )
}
export default MovieReviews;