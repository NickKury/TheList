import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderMovieReviews } from "../../store/review";
import DeleteReview from "./DeleteReview";
import EditReview from "./EditReview";


const MovieReviews = (movie) => {
    const movieId = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    const user = useSelector(state => state.session) //current user
    console.log("movie from movie reviews", movie, movieId)

    useEffect(() => {
        dispatch(renderMovieReviews(movieId.id))
    }, [dispatch, movieId.id]) //removed movie

    return(
        <div> Movie Reviews
            {reviews?.map((review) => (
                <div key={review?.id}>
                    <p>{review?.user?.username}</p>
                    {review?.content}
                    {user.user?.id === review.user?.id
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