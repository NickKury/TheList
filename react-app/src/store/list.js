//constants
const SET_LISTS = "list/SET_LISTS";
const SET_ONE_LIST = "list/SET_ONE_LIST";
const ADD_LIST = "list/ADD_LIST";
const REMOVE_LIST = "list/REMOVE_LIST"

// action creators
const setLists = (list) => ({
    type: SET_LISTS,
    payload: list
});

const setOneList = (list) => ({
    type: SET_ONE_LIST,
    payload: list
})

const addList = (list) => ({
    type: ADD_LIST,
    payload: list
})

const removeList = (list) => ({
    type: REMOVE_LIST,
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

export const createList = (formData) => async(dispatch) =>{
    const res = await fetch("/api/lists/new", {
        method: "POST",
        body: formData
    });
    if(res.ok) {
        const newList = await res.json();
        dispatch(addList(newList))
        return newList;
    } else console.log("Error in creating new list")
}

export const deleteList = (id) => async(dispatch) =>{
    const res = await fetch(`/api/lists/delete/${id}`, {
        method:"DELETE",
        body: JSON.stringify(id)
    })
    if(res.ok) {
        const deletedList = await res.json();
        dispatch(removeList(deleteList));
        return deletedList;
    } else console.log(`error in deleting list ${id}`)
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
            // newState[action.payload.id] = action.payload;
            // return newState;
            const oneListState = {...action.payload};
            return oneListState;

        case ADD_LIST:
            newState[action.payload.id] = action.payload;
            return newState;

        case REMOVE_LIST:
            delete newState[action.payload.id]
            return newState;

        default:
            return state;
        }
    }