import React from 'react'

const TeamCard = ({ member }) => {
  return (
    <div className="col-4 my-4 ">
    <div className="card" style={{width:'18rem'}}>
      <img src="..." className="card-img-top" alt="courseImage" />
      <div className="card-body">
        <h5 className="card-title">Name : {member.name}</h5>
      </div>
    </div>
  </div>
  )
}

export default TeamCard