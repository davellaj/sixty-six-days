import 'isomorphic-fetch'

export const FETCH_GOALS_REQUEST = 'FETCH_GOALS_REQUEST';
export const fetchGoalsRequest = () => ({
  type: FETCH_GOALS_REQUEST
})

export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';
export const fetchGoalsSuccess = goals => ({
  type: FETCH_GOALS_SUCCESS,
  goals
})

export const FETCH_GOALS_ERROR = 'FETCH_GOALS_ERROR';
export const fetchGoalsError = error => ({
  type: FETCH_GOALS_ERROR,
  error
})

export const fetchGoals = () => dispatch => {
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
