import { useDispatch } from "react-redux"
import { removeReview } from "../../store/review";


const DeleteReview = ({review}) => {
    const dispatch = useDispatch();
    
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(removeReview(review.id))
        console.log('deleted review', review)

    }

    return (
        <button onClick={handleDelete}>
            Delete Review
        </button>
    )
}

export default DeleteReview;