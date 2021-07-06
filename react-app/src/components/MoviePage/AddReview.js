import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addReview, renderMovieReviews } from "../../store/review"

const AddReview = ({movie}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    console.log("user from add review", user)
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('content', content);
        formData.append('user_id', user.id)
        formData.append('movie_id', movie.id)

        dispatch(addReview(formData))
        setContent('')
    }

    useEffect(() => {
        dispatch(renderMovieReviews(movie.id))
    }, [dispatch])

    const updateContent = e => setContent(e.target.value)

    return(
        <form onSubmit={handleSubmit}>
            <textarea placeholder='Type your Review' onChange={updateContent} value={content}/>
                <button type='submit'>
                    Post Review
                </button>
        </form>
    )
}

export default AddReview;