import React from "react";
import Feedback from "./Feedback";

const Profile = (props) => {
  const { name, id } = props;
  const { goodFeedbacks, totalFeedbacks } = props;
  const badFeedbacks = totalFeedbacks - goodFeedbacks;
  const feedback = Boolean(totalFeedbacks);

  return (
    <div
      className="profile-container"
      style={{ minWidth: 425, minHeight: 300 }}
    >
      <title>Profile</title>

      <img
        className="profile-image"
        src="https://image.flaticon.com/icons/png/64/1077/1077012.png"
      ></img>
      <Feedback
        feedback={feedback}
        goodFeedbacks={goodFeedbacks}
        badFeedbacks={badFeedbacks}
      ></Feedback>

      <div className="profile-info">
        <h2>{name}</h2>
        <h3>{id}</h3>
        <button className="profile-edit-btn">Edit profile</button>
      </div>
    </div>
  );
};

export default Profile;
