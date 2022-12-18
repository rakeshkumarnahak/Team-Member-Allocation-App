import React from "react";
import femaleProfile from "./images/femaleProfilePhoto.png";
import maleProfile from "./images/maleProfilePhoto.png";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "female" ? (
        <img src={femaleProfile} alt="Female Profile" />
      ) : (
        <img src={maleProfile} alt="Female Profile" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation: </b>
          {employee.designation}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
