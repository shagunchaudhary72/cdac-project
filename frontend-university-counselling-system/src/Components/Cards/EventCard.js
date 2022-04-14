import React from "react";

const EventCard = ({eventDetails, resultDate, updationDate}) => {
  return (
    <div className="card w-85 my-3 event-card">
      <div className="card-body">
        <h5 className="card-title border-bottom border-success">{eventDetails.title} </h5>
        <p className="card-text">
          {eventDetails.news} <span className="text-success fst-italic">{ eventDetails.id === 1 ? resultDate : updationDate }</span>
        </p>
      </div>
    </div>
  );
};

export default EventCard;
