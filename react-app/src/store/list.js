//constants
const SET_LISTS = "list/SET_LISTS";
const SET_ONE_LIST = "list/SET_ONE_LIST";

// action creators
const setLists = (list) => ({
    type: SET_LISTS,
    payload: list
});

const setOneList = (list) => ({
    type: SET_ONE_LIST,
    payload: list
})

//thunks
export const renderAllLists = () => async(dispatch) =>{
    const res = await fetch("/api/lists");
    if(res.ok) {
        const lists = await res.json()
        dispatch(setLists(lists));//await
    }
    else console.log('Error in rendering all lists.')
}

export const renderOneList = (id) => async(dispatch) =>{
    const res = await fetch(`/api/lists/${id}`);
    if(res.ok) {
        const list = await res.json()
        dispatch(setOneList(list));//await
    }
    else console.log(`Error in rendering list ${id}.`)
}

//reducer
const initialState = {};

export default function listReducer(state=initialState, action) {
    const newState = {...state};
    switch (action.type) {
        case SET_LISTS:
            action.payload.forEach(list => {
                newState[action.payload.id] = list;
            });
            return newState;
        
        case SET_ONE_LIST:
            const oneListState = {...action.payload};
            return oneListState;

        default:
            return state;
        }
    }