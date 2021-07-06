import { useState } from "react";
import { useDispatch } from "react-redux"
import { updateReview } from "../../store/review";
import { Modal } from '../../context/Modal'

const EditReview = ({review}) =>{
    const dispatch = useDispatch();

    const [content, setContent] = useState("")
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("content", content);
        dispatch(updateReview(formData, review.id));
        setShowModal(false)
    }

    const updateContent = e => setContent(e.target.value)


    return (
        <>
        <button onClick={() => setShowModal(true)}>Edit Review</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <form onSubmit={handleSubmit}>
                    <textarea placeholder={review.content}
                     onChange={updateContent}/>
                    <button type='submit'>
                     Post Edited Review
                    </button>
                </form>
            </Modal>
         )}
         </>
    )
}

export default EditReview;