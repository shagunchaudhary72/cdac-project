import React, { useState } from "react";
import EventCard from "../Cards/EventCard";
import "./Events.css";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";

const Events = () => {
  const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  const [events, SetEvents] = useState(list);

  return (
    <section className="container events-section ">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1 className="text-center py-3 heading-bottom-border">
            Upcoming Events
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 events-section-left"></div>
        <div className="col-6 events-section-right">
          {events.map((event) => {
            return <EventCard key={event.id} eventDetails={event} />;
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
