import React from 'react'

const TeamCard = ({ member }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 my-4">
    <div className="card" style={{width:'18rem'}}>
      <img src={member.image} className="card-img-top" width={150} height={300} alt="courseImage" />
      <div className="card-body">
        <h5 className="card-title">Name: {member.name}</h5>
        <p><b>PRN:</b> {member.prn}</p>
      </div>
    </div>
  </div>
  )
}

export default TeamCard