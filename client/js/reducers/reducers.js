import * as actions from '../actions/actions';

const initialState = {
  goal: "";
};

export const goalsReducer = (state=initialState, action) => {
  if action.type === actions.FETCH_GOALS_SUCCESS) {
    return {...state, {
      goal: action.goal
    }}
  }
}
