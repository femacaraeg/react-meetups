import React, { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/El_Nido_Palawan_2.jpg',
    address: 'Some address, 23232, Some City, Some Country',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/El_Nido_Palawan_2.jpg',
    address: 'Some address, 23232, Some City, Some Country',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;