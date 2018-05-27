import { MOVIE, MOVIE_SUCCESS, MOVIE_FAIL } from '../constants/action-types';
const INITIAL_STATE = {
  movie: {
    result: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MOVIE:
      return {
        ...state,
        movie: {
          result: [...state.movie.result],
          error: null,
          loading: true
        }
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        movie: {
          result: action.payload.data,
          error: null,
          loading: false
        }
      };
    case MOVIE_FAIL:
      return {
        ...state,
        movie: {
          result: [],
          error: action.error,
          loading: false
        }
      };

    default:
      return state;
  }
}
