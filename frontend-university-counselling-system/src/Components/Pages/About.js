import React, { useEffect } from 'react'

const About = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="container-fluid w-50 about-page" style={{marginBottom:"10%"}}>
      <div className="m-5">
        <h2 className="fw-bold mb-2 text-uppercase">About us &nbsp;<i className='fas fa-lightbulb' style={{color: "green"}}></i></h2><br/>
        <p>
          We are a team of 6 people who have developed this University Counselling System.
          This system will ease the process of counselling for both student and the College.<br/>
          This can be an alternative to the traditional university counselling systems as its fast
          secure and reliable.<br/>
          We belive in advancement and regular upgradation with every advancing day.<br/>
          This project is developed using REACT JS as frontend and Spring boot REST as backend.
        </p>
      </div>
    </div>
  )
}

export default About