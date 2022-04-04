import React from "react";

const EventCard = ( eventDetails ) => {
  return (
    <div className="card w-75 my-5">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
};

export default EventCard;
