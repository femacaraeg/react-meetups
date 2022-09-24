import React from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/5/5e/El_Nido_Palawan_2.jpg'
      title='A First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
  );
}

export default MeetupDetails;
