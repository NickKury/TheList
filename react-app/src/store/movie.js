//constants
const SET_MOVIES = "movie/SET_MOVIES";
const SET_ONE_MOVIE = "movie/SET_ONE_MOVIE";

// action creators
const setMovies = (movie) => ({
    type: SET_MOVIES,
    payload: movie
});

const setOneMovie = (movie) => ({
    type: SET_ONE_MOVIE,
    payload: movie
})

//thunks
export const renderAllMovies = () => async(dispatch) =>{
    const res = await fetch("/api/movies");
    if(res.ok) {
        const movies = await res.json()
        dispatch(setMovies(movies));//await
    }
    else console.log('Error in rendering all movies.')
}

export const renderOneMovie = (id) => async(dispatch) =>{
    const res = await fetch(`/api/movies/${id}`);
    if(res.ok) {
        const movie = await res.json()
        dispatch(setOneMovie(movie));//await
    }
    else console.log(`Error in rendering movie ${id}.`)
}

//reducer
const initialState = {};

export default function movieReducer(state=initialState, action) {
    const newState = {...state};
    switch (action.type) {
        case SET_MOVIES:
            action.payload.forEach(movie => {
                newState[action.payload.id] = movie;
            });
            return newState;
        
        case SET_ONE_MOVIE:
            const oneMovieState = {...action.payload};
            return oneMovieState;

        default:
            return state;
    }
}