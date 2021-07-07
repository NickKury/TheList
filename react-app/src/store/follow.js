//constants
const FOLLOW = "follows/FOLLOW"
const UNFOLLOW = "follows/UNFOLLOW"

//action creators
const follow = (userId) => ({
    type: FOLLOW,
    payload: userId
})

const unfollow = (userId) => ({
    type:UNFOLLOW,
    payload:userId
})

//thunks
export const followUser = (userId) => async(dispatch) => {
    const res = await fetch(`/api/follows/${userId}`,{
        method: "POST",
        body: userId
    })
    if(res.ok){
        const newFollow = await res.json();
        dispatch(follow(newFollow))
        // return newFollow
    } else console.log(`Error in following user ${userId}`)
}

export const unfollowUser = (userId) => async(dispatch) => {
    const res = await fetch(`/api/follows/unfollow/${userId}`,{
        method: "POST",
        body: userId
    })
    if(res.ok){
        const removeFollow = await res.json();
        dispatch(unfollow(removeFollow))
        // return newFollow
    } else console.log(`Error in Unfollowing user ${userId}`)
}

//reducer

const initialState = {};
export default function followReducer(state=initialState, action) {
    const newState = {...state};
    switch(action.type) {
        case FOLLOW:
            newState[action.payload.id] = action.payload;
            return newState;

        default:
            return state;
    }
}