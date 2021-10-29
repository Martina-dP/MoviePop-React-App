import axios from "axios";

export const GET_MOVIES = "GET_MOVIES"
export const GET_MOVIES_PROXIMAS = "GET_MOVIES_PROXIMAS"
export const GET_DETAILS = "GET_DETAILS"
export const FILTER_RATING = "FILTER_RATING"

export function getMovies () {
    return async function(dispatch){
        var json = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=a82142c5a991563a2ecf775844e921c6`)
        return dispatch({
            type : "GET_MOVIES",
            payload : json.data
        })
    }
}

export function getMoviesProximas () {
    return async function(dispatch){
        var json = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a82142c5a991563a2ecf775844e921c6`)
        return dispatch({
            type : "GET_MOVIES_PROXIMAS",
            payload : json.data
        })
    }
}

export function getDetails(id) {
    return async function (dispatch) {
    var json = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a82142c5a991563a2ecf775844e921c6`)
    return dispatch({
        type : "GET_DETAILS",
        payload : json.data
        })
    }
};

export function filterRating(payload) {
    console.log("DESDE ACTION ESTRELLAS", payload)
    return {
        type: "FILTER_RATING",
        payload
        } 
};


// export function searchMovie() {
//     return async function (dispatch) {
//     var json = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a82142c5a991563a2ecf775844e921c6`)
//       return dispatch({
//         type : "SEARCH_MOVIE",
//         payload : json.data
//         })
//     }
// };

