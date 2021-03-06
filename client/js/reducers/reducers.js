import * as actions from '../actions/actions';

const initialState = {
  goals: [],
  completed: false,
  // users: [],
  loading: false,
  error: null
};

export const GoalsReducer = (state=initialState, action) => {
  // console.log(state);
  if (action.type === actions.FETCH_REQUEST) {
    return {...state,
      loading: true
    }
  }
  if (action.type === actions.FETCH_GOALS_SUCCESS) {
    return {...state,
      goals: action.goals,
      completed: action.completed,
      loading: false,
      error: null
    }
  }
  if (action.type === actions.FETCH_ERROR) {
    return {...state,
      loading: false,
      goal: action.error,
      error: null
    }
  }
  if (action.type === actions.FETCH_STICKERS_SUCCESS) {
    return {...state,
      stickers: action.stickers,
      loading: false,
      error: null
    }
  }
  return state;
}
