import React from 'react'

const Contact = () => {
    return (
      <div style={{backgroundColor: "#d3ded6"}}>
      <div className="container-fluid w-50 mt-5" >
      <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase">Contact Us &nbsp;<i className="fa fa-paper-plane" style={{color: "green"}}></i></h2><br/>
          
			<p>
                We are devoted to serve you in our best way possible.<br/> If you have any query or issue regarding counselling, feel free to contact us!
                <br/><br/>
                <h6 className="fw-bold mb-2 text-uppercase">Email &nbsp;<i className="fa fa-envelope" aria-hidden="true" style={{color: "green"}}></i></h6>
                <a href="mailto:Info@youremail.com" style={{color: "black"}}>Info@youremail.com</a>
                <br/><br/>
                <h6 className="fw-bold mb-2 text-uppercase">Phone &nbsp;<i className="fa fa-phone" aria-hidden="true" style={{color: "green"}}></i></h6>
                12-3456-7890, 98-7654-3509
                <br/><br/><br/>
                <h5 className="fw-bold mb-2 text-uppercase"> Advanced Computing Training School (ACTS) &nbsp;<i className="fas fa-map-marker-alt" style={{color: "green"}}></i></h5>
                <strong>Center for Development of Advanced Computing (C-DAC)</strong><br/>
                C-DAC Innovation Park,<br/>
                Panchavati, Pashan,<br/>
                Pune - 411 008, Maharashtra (India)<br/>
                Phone: +91-20-25503100<br/>
                Fax: +91-20-25503131<br/><br/><br/>
            </p>
      </div>
      </div>
      </div>
    )
  }
  
  export default Contact