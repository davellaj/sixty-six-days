import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

export class Goals extends React.Component {
  constructor(props){
    super(props);
    this.sendUserGoal = this.sendUserGoal.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(actions.fetchGoals())
  }

  sendUserGoal(event){
    event.preventDefault();
    const userGoal = this.textInput.value;
    console.log('fired off sendUserGoal event', userGoal)
    this.props.dispatch(actions.addGoal(userGoal))
    this.textInput.value='';
  }

  render() {
    console.log(this.props.userGoals);
    const goals = this.props.userGoals.map((goal, idx) => {
      return <li key={idx}>{goal.goal}</li>
    })
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.sendUserGoal}>
          <label>New Goal</label>
          <br></br>
          <input type="text" ref={input => this.textInput = input} placeholder="type your goal"/>
          <button type="submit">Submit</button>
        </form>
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
