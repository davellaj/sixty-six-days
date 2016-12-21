import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

export default class Calendar extends React.Component {
  constructor(props){
    super(props);

    let event = {
        title: 'Sample Event',
        description: '',
        location: '',
        startTime: '',
        endTime: ''
    };

    /*
       startTime and endTime can use any datetime
       string that is acceptable by MomentJS
    */
    // return event;

  }

  render() {
    // console.log(event)
    return <AddToCalendar event={event} />;
    }
};
