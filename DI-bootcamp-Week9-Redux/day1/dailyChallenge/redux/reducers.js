import{MOVIE_SELECTED} from './actions'
import {combineReducers} from 'redux';
const initState = {
  movies: [
    {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
    {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
    {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
    {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
    {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
  ],
  movie:{}
}

export const moviesReducer = (state=initState,action={}) => {
    return {...state}
}

export const selectedMovieReducer = (state=initState,action={}) => {
  switch (action.type) {
    case MOVIE_SELECTED:
      return {...state, movie:state.movies[action.payload]}
    default:
      return {...state}
  }
}

export const rootReducer = combineReducers({
  moviesReducer,
  selectedMovieReducer
})


