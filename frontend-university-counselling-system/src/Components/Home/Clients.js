import React from "react";

const Clients = () => {
  return (
    <section className="container-fluid clients-section p-3">
      <div className="row justify-content-center">
        <div className="col-4">
          <h3 className="text-white">Our Awesome Clients!</h3>
          <p className="text-white">
            Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat
            dignissim. Et harum quidem
          </p>
        </div>
        <div className="col-2 align-self-center">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="col-2 align-self-center">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="col-2 align-self-center">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
        <div className="col-2 align-self-center">
            <img src="..." className="clients-logo" alt="clients"/>
        </div>
      </div>
    </section>
  );
};

export default Clients;
