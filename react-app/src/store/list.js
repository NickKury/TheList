//constants
const SET_LISTS = "list/SET_LISTS";
const SET_ONE_LIST = "list/SET_ONE_LIST";
const ADD_LIST = "list/ADD_LIST";
const REMOVE_LIST = "list/REMOVE_LIST"

// action creators
const setLists = (lists) => ({
    type: SET_LISTS,
    payload: lists
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
        return lists;
    }
    else console.log('Error in rendering all lists.')
}

export const renderUserLists = (id) => async(dispatch) => {
    const res = await fetch(`/api/users/lists/${id}`);
    if(res.ok) {
        const lists = await res.json()
        dispatch(setLists(lists))
        return lists;
    } else console.log('Error in rendering user lists.')
}

// export const renderListMovies = (id) => async(dispatch) => {
//     const res = await fetch(`/api/lists/${id}`);
//     if(res.ok){
//         const list = await res.json();
//         // console.log('list from thunk====================================', list)
//         dispatch(setOneList(list));
//     } else console.log("Error in rendering list movies")
// }

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


export const addMovie = (formData) => async(dispatch) => {
    const res = await fetch("/api/lists/add", {
        method:"POST",
        body: formData
    });
    if(res.ok) {
        const list = await res.json();
        dispatch(setOneList(list));
    } else console.log("Error adding movie to list")
}


export const removeMovie = (listId, movieId) => async(dispatch) => { 
    const res = await fetch("/api/lists/remove", {
        method:"DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({listId, movieId})
    })
    if(res.ok) {
        const list = await res.json();
        dispatch(setOneList(list))
    } else console.log("ERROR removing a movie")
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
            // action.payload.lists.forEach(list => {
            //     newState[list.id] = list; //!here
            // });
            // return newState;
            return {...action.payload};
        
        case SET_ONE_LIST:
            const listState = {}
            listState[action.payload.listName] = action.payload;
            return listState;
            // return {...action.payload};
            // return oneListState;

        case ADD_LIST:
            newState[action.payload.listName] = action.payload;
            return newState;

        case REMOVE_LIST:
            delete newState[action.payload.listName]
            return newState;

        default:
            return state;
        }
    }