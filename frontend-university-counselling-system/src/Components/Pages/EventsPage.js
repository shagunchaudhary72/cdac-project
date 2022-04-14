import React from 'react'
import { useState, useEffect } from 'react';
import events from '../../EventsData';
import EventCard from '../Cards/EventCard';
import AdminService from '../../Services/AdminService';

const EventsPage = () => {

  const [ resultDate, setResultDate] = useState();
  const [ updationDate, setUpdationDate] = useState();
  const [eventsData, SetEventsData] = useState(events);

    useEffect(() => {
      AdminService.getAcademicDates().then((response) => {
        if( response.status === 200 ){
            setResultDate( response.data.resultDate );
            setUpdationDate( response.data.updationDate );
            SetEventsData(events);
            console.log( response.data );
        }
    }).catch((err) => {
        console.log(err);
    });
    console.log(events);
    },[])
    
  return (
    <div className='event-page my-5'>
        <h1 className='text-center my-3'>Upcoming Events</h1>
        <div className='event-card w-50 mx-auto'>
          { eventsData.length > 0 && eventsData.map((event) => {
            return <EventCard key={event.id} eventDetails={event} resultDate={resultDate} updationDate={updationDate}/>;
          }
          )}
          </div>
        </div>
  )
}

export default EventsPage