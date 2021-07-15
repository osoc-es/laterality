import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>Letra ya introducida o en orden incorrecto</p>
    </div>
  );
};

export default Notification;
