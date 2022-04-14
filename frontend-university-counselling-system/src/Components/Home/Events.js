import React, { useState, useEffect } from "react";
import EventCard from "../Cards/EventCard";
import "./Events.css";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import events from '../../EventsData'
import AdminService from "../../Services/AdminService";

const Events = () => {

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
    <section className="container events-section ">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="event-heading text-center py-3 heading-bottom-border">
            Upcoming Events
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 events-section-left"></div>
        <div className="col-6 events-section-right">
          { eventsData.length > 0 && eventsData.map((event) => {
            return <EventCard key={event.id} eventDetails={event}  resultDate={resultDate} updationDate={updationDate} />;
          })}
          <div className="more-data">
            <Link className=" more-data" to="/events">
              See more <ImArrowRight2 />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
