// our-domain.com/new-meetup
import React from 'react';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log('adding a new meetup', enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
