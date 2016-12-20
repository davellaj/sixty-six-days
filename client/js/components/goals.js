import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

export class Goals extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchGoals())
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>{this.props.state.goal}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  state
})

export default connect(mapStateToProps)(Goals)
