// export const ADD_GOAL = 'ADD_GOAL';
// export const addGoal = goal => ({
//   type: ADD_GOAL,
//   goal
// })

export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const fetchGoalsSuccess = goal => ({
  type: FETCH_GOALS_SUCCESS,
  goal
})

export const FETCH_GOALS_ERROR = 'FETCH_GOALS_ERROR';
export const fetchGoalsError = (goal, error) => ({
  type: FETCH_GOALS_ERROR,
  goal,
  error
})

export const fetchGoals = goals => dispatch => {
  const url = `http://localhost:8080/home`;
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(data =>
  dispatch(fetchGoalsSuccess(goal))
  )
  .catch(error =>
    dispatch(fetchGoalsError(goal, error))
  );
};
