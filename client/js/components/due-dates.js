import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import {connect} from 'react-redux';

export class Calendar extends React.Component {
  constructor(props){
    super(props);


    /*
       startTime and endTime can use any datetime
       string that is acceptable by MomentJS
    */
}


  render() {
    console.log(this.props);
    const event = {
        title: this.props.goal,
        description: 'You can do it!',
        location: 'Chicago, IL',
        startTime: new Date(),
        endTime: new Date()
    };
    return <AddToCalendar event={event} />;
    }
};

const mapStateToProps = (state, props) => ({
  userGoals: state.goals
})

export default connect(mapStateToProps)(Calendar)
