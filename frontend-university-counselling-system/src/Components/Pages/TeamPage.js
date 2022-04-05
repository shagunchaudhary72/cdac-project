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
        <div className="row justify-content-between">
          {" "}
          {teamMembers.map((member) => {
            return <TeamCard key={member.id} member={member} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
