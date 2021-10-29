import { 
    GET_MOVIES,
    GET_DETAILS,
    FILTER_RATING,
    GET_MOVIES_PROXIMAS
} from "../Action/Action"

const initialState = {
    movies : [],
    totalMovies : [],
    proximasM: [],
    detail: {},
    search: [],
  };

function rootReducer (state = initialState, { type, payload }) {
    switch(type) {
        case GET_MOVIES :
            console.log("hola",payload)
            return {
                ...state,
                movies : payload.results,
                totalMovies : payload.results
            }
        case GET_MOVIES_PROXIMAS :
            return {
                ...state,
                proximasM : payload.results
            }
        case GET_DETAILS :
            return {
                ...state,
                detail : payload
            }
        case FILTER_RATING :
            const allMovies = state.totalMovies
            var min = 0
            var max = 0
            if (payload === 1){
                min = 0
                max = 1.99
            }  else if (payload === 2){
                min = 2
                max = 3.99
            }else if (payload === 3){
                min = 4
                max = 5.99
            } else if (payload === 4){
                min = 6
                max = 7.99
            }else if (payload === 5){
                min = 8
                max = 10
            }
            const filterMovies = allMovies.filter(e => e.vote_average > min && e.vote_average < max)
            return {
                ...state,
                movies : filterMovies
            }            
        default: return state;
    }
}

export default rootReducer;