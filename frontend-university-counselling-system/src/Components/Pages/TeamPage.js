import React from "react";
import { useState } from "react";
import team from "../../TeamData";
import TeamCard from "../Cards/TeamCard";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState(team);

  return (
    <div className="team-page my-5">
      <h1 className="team-heading text-center my-3">Our Team</h1>
      <div className="container">
      <center>
        <div className="row">
          {" "}
          {teamMembers.map((member) => {
            return <TeamCard key={member.id} member={member} />;
          })}
        </div>
        </center>
      </div>
    </div>
  );
};

export default TeamPage;
