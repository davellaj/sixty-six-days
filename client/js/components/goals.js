import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

export class Goals extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchGoals())
  }

  render() {
    console.log(this.props.userGoals);
    const goals = this.props.userGoals.map((goal, idx) => {
      return <li key={idx}>{goal.goal}</li>
    })
    // console.log(this.props)
    return (
      <div>
        <ul>
          {goals}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userGoals: state.goals
})

export default connect(mapStateToProps)(Goals)
