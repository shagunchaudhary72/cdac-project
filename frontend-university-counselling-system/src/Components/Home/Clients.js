import React from "react";
import './Clients.css'

const Clients = () => {
  return (
    <section className="container-fluid clients-section p-3">
        <div className="clients-section-box1">
          <h3 className="text-white">Our Awesome Clients!</h3>
          <p className="text-white">
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Et harum quidem
          </p>
        </div>
        <div className="clients-section-box">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="clients-section-box">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="clients-section-box">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="clients-section-box">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
    </section>
  );
};

export default Clients;
