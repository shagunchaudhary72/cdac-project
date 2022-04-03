import React, { useState } from "react";
import EventCard from "../Cards/EventCard";

const Events = () => {

    const list = [
        { id : 1},
        { id : 2},
        { id : 3},
        { id : 4}
    ]

    const[events,SetEvents] = useState(list);

  return (
    <section className="events-section container">
      <div className="row">
        <h1 className="text-center py-5">Upcoming Events</h1>
      </div>
      <div className="row">
          <div className="col-6">
              Hello Friends......
          </div>
            <div className="col-6">
                { events.map(( event ) =>{
                    return <EventCard key={event.id} eventDetails={event}/>
                })}
            </div>
      </div>
    </section>
  );
};

export default Events;
