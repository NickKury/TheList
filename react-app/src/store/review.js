//constants
const SET_REVIEWS = "reviews/SET_REVIEWS";
const ADD_REVIEW = "review/ADD_REVIEW";
const REMOVE_REVIEW = "review/REMOVE_REVIEW";
const EDIT_REVIEW = "review/EDIT_REVIEW";

//action creators
const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    payload: reviews
});

const postReview = (review) =>({
    type: ADD_REVIEW,
    payload: review
})

const deleteReview = (review) => ({
    type: REMOVE_REVIEW,
    payload: review
})

const editReview = (review) => ({
    type: EDIT_REVIEW,
    payload:review
})

//thunks
export const renderMovieReviews = (id) => async(dispatch) => {
    const res = await fetch(`/api/reviews/${id}`)
    if(res.ok){
        const reviews = await res.json();
        dispatch(setReviews(reviews));
    } else console.log(`Error in getting reviews for movie ${id}`)
}

export const addReview = (formData) => async(dispatch) =>{
    const res = await fetch("/api/reviews/new", {
        method: "POST",
        body: formData
    });
    if(res.ok){
        const newReview = await res.json();
        dispatch(postReview(newReview))
        return newReview;
    }
}

export const removeReview = (id) => async(dispatch) => {
    const res = await fetch(`/api/reviews/delete/${id}`,{
        method:"DELETE",
        body: JSON.stringify(id)
    });
    if(res.ok) {
        const deletedReview = await res.json();
        dispatch(deleteReview(deletedReview))
        return deletedReview;
    }
}

export const updateReview = (formData, review_id) => async(dispatch) => {
    const res = await fetch(`/api/reviews/update/${review_id}`, {
        method:"PUT",
        body: formData
    })
    if(res.ok){
        const editedReview = await res.json()
        dispatch(editReview(editedReview))
        return editedReview;
    }
}

//reducer
const initialState = {};
export default function reviewReducer(state=initialState, action) {
    const newState = {...state};
    switch(action.type) {
        case SET_REVIEWS:
            const reviewState = {}
            action.payload.reviews.forEach((review) =>{
                reviewState[review.id] = review;
            })
            return reviewState;
            // action.payload.reviews.forEach(review => {
            //     newState[review.id] = review; //!here
            // });
            // return newState;

        case ADD_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;

        case REMOVE_REVIEW:
            delete newState[action.payload.id]
            return newState;

        case EDIT_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}