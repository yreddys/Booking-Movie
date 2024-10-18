// src/components/CancelTicket.js
import React, { useState } from "react";

const CancelTicket = () => {
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cancel ticket with ID:", ticketId);
    // Replace with actual API call to cancel the ticket
  };

  return (
    <div>
      <h1>Cancel Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ticket ID:</label>
          <input
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
          />
        </div>
        <button type="submit">Cancel Ticket</button>
      </form>
    </div>
  );
};

export default CancelTicket;
