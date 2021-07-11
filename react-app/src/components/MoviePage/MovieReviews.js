import { useEffect } from "react";
import {useParams, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { renderMovieReviews } from "../../store/review";
import DeleteReview from "./DeleteReview";
import EditReview from "./EditReview";


const MovieReviews = (movie) => {
    const movieId = useParams();
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.review));
    const user = useSelector(state => state.session) //current user
    // console.log("movie from movie reviews", movieId, reviews)

    useEffect(() => {
        dispatch(renderMovieReviews(movieId.id))
    }, [dispatch, movieId.id])

    return(
        <div >
            <p id='review-header'>Reviews</p>
            {reviews?.map((review) => (
                <div id='review' key={review?.id}>
                    {review?.content}
                    <p>
                    <Link to={`/users/${review?.user?.id}`}>Posted by: {review?.user?.username}</Link>
                    </p>
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