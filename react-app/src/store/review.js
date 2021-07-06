//constants
const SET_REVIEWS = "reviews/SET_REVIEWS";
const ADD_REVIEW = "review/ADD_REVIEW"

//action creators
const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    payload: reviews
});

const postReview = (review) =>({
    type: ADD_REVIEW,
    payload: review
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

//reducer
const initialState = {};
export default function reviewReducer(state=initialState, action) {
    const newState = {...state};
    switch(action.type) {
        case SET_REVIEWS:
            action.payload.reviews.forEach(review => {
                newState[review.id] = review; //!here
            });
            return newState;

        case ADD_REVIEW:
            newState[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}