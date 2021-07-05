//constants
const SET_REVIEWS = "reviews/SET_REVIEWS";

//action creators
const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    payload: reviews
});

//thunks
export const renderMovieReviews = (id) => async(dispatch) => {
    const res = await fetch(`/api/reviews/${id}`)
    if(res.ok){
        const reviews = await res.json();
        dispatch(setReviews(reviews));
    } else console.log(`Error in getting reviews for movie ${id}`)
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
        default:
            return state;
    }
}