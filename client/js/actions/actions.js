import 'isomorphic-fetch'

const url = `/api/home`

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

export const addGoal = (goal) => dispatch => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goal
    })
  })
  .then(response => response.json())
  .then(goal => dispatch(fetchGoalsSuccess(goal)))
}

//when click button it sends id to this action
export const deleteGoal = (id) => dispatch => {
  return fetch(url + "/" + id, {
    method: 'DELETE'
  })
  .then(() => dispatch(fetchGoals()))
}

export const updateGoal = (goal, id) => dispatch => {
  return fetch(url + "/" + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      goal
    })
  })
  .then(response => response.json())
  .then((goal) => dispatch(fetchGoalsSuccess(goal)))
}
