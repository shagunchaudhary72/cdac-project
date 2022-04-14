import React from "react";

const EventCard = ({eventDetails}) => {
  return (
    <div className="card w-85 my-3">
      <div className="card-body">
        <h5 className="card-title">{eventDetails.title}</h5>
        <p className="card-text">
          {eventDetails.news}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
