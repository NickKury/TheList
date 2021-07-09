//constants
const SET_MOVIES = "movie/SET_MOVIES";
const SET_ONE_MOVIE = "movie/SET_ONE_MOVIE";

// action creators
const setMovies = (movies) => ({
    type: SET_MOVIES,
    payload: movies
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
        dispatch(setMovies(movies));
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
            // console.log("actiobn.payload from moviereducer", action.payload)
            action.payload.movies.forEach(movie => {
                // console.log("movie from moviereducer", movie)
                newState[movie.id] = movie;
            });
            // console.log("state from moviereducer", newState[action.payload.id])
            return newState;
        
        case SET_ONE_MOVIE:
           return {...action.payload};
            // return oneMovieState;

        default:
            return state;
    }
}