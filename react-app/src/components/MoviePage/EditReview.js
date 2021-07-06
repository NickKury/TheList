import { useState } from "react";
import { useDispatch } from "react-redux"
import { updateReview } from "../../store/review";

const EditReview = ({review}) =>{
    const dispatch = useDispatch();

    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", content);
        dispatch(updateReview(formData, review.id));
    }

    const updateContent = e => setContent(e.target.value)


    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder={review.content}
            onChange={updateContent}/>
            <button type='submit'>
                Post Edited Review
            </button>

        </form>
    )
}

export default EditReview;