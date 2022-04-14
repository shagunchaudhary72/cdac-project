import React from 'react'
import { useState } from 'react';
import events from '../../EventsData';
import EventCard from '../Cards/EventCard';

const EventsPage = () => {

    const [eventsData, SetEventsData] = useState(events);

  return (
    <div className='event-page my-5'>
        <h1 className='text-center my-3'>Upcoming Events</h1>
        <div className='event-card w-50 mx-auto'>
          {eventsData.map((event) => {
            return <EventCard key={event.id} event={event} />;
          }
          )}
          </div>
        </div>
  )
}

export default EventsPage