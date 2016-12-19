import * as actions from '../actions/actions';

const initialState = {
  goal: "";
  loading: false,
  error: null
};

export const goalsReducer = (state=initialState, action) => {
  if action.type === actions.FETCH_GOALS_REQUEST) {
    return {...state,
      loading: true
    }
  }
  if action.type === actions.FETCH_GOALS_SUCCESS) {
    return {...state,
      goal: action.goal,
      loading: false,
      error: null
    }
  }
  if action.type === actions.FETCH_GOALS_ERROR) {
    return {...state,
      loading: false,
      goal: action.error,
      error: null
    }
  }
  return state;
}
