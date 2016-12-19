import 'isomorphic-fetch'

export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const fetchGoalsRequest = () => ({
  type: FETCH_GOALS_REQUEST
})

export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const fetchGoalsSuccess = goal => ({
  type: FETCH_GOALS_SUCCESS,
  goal
})

export const FETCH_GOALS_ERROR = 'FETCH_GOALS_ERROR';
export const fetchGoalsError = error => ({
  type: FETCH_GOALS_ERROR,
  error
})

export const fetchGoals = goals => dispatch => {
  const url = `http://localhost:8080/api/home`
  return fetch(url)
  .then(dispatch(fetchGoalsRequest()))
  .then(response => {
    if (!response.ok) {
      const error = new Error(response.statusText)
      error.response = response
      throw error;
    }
    return response;
  })
  .then(response => response.json())
  .then(goalData =>
  dispatch(fetchGoalsSuccess(goalData))
  )
  .catch(error =>
    dispatch(fetchGoalsError(error))
  );
};
