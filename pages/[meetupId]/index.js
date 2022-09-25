import React from 'react';
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  const { meetupData } = props;

  return (
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  //  fetch data for a single meetup
  const client = await MongoClient.connect(
    'mongodb+srv://master:R8miijHH.Kc4jYe@cluster0.sor9xfy.mongodb.net/MeetupsDatabase?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  //  fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://master:R8miijHH.Kc4jYe@cluster0.sor9xfy.mongodb.net/MeetupsDatabase?retryWrites=true&w=majority'
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  const formattedMeetup = {
    ...selectedMeetup,
    id: selectedMeetup._id.toString(),
  };

  delete formattedMeetup._id;

  return {
    props: {
      meetupData: formattedMeetup,
    },
  };
}
export default MeetupDetails;
