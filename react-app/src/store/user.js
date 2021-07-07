const GET_USER = 'user/GET_USER';

const getUsers = (user) => ({
    type: GET_USER,
    payload: user
});

export const getUser = (id) => async(dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    if(res.ok) {
        const user = await res.json();
        dispatch(getUsers(user))
        return user;
    }
};

const initialState = {};

export default function userReducer(state=initialState, action) {
    const newState = {...state};
    switch(action.type) {
        case GET_USER:
            // newState[action.payload.id] = action.payload;
            // return newState;
            return{...action.payload}

        default:
            return state;
    }
}