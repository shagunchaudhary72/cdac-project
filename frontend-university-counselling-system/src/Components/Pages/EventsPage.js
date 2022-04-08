import React from 'react'
import { useState } from 'react';
import EventCard from '../Cards/EventCard';
import events from '../../EventsData'

const EventsPage = () => {

    const [eventsData, SetEventsData] = useState(events);

  return (
    <div className='event-page my-5'>
        <h1 className='text-center my-3'>Upcoming Events</h1>
        <div className="container">
        <div className="row justify-content-between">
        <div className='col-6'>
          {" "}
          {eventsData.map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage