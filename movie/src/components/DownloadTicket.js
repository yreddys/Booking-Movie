// src/components/DownloadTicket.js
import React, { useState } from "react";

const DownloadTicket = () => {
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Download ticket with ID:", ticketId);
    // Replace with actual API call to download the ticket
  };

  return (
    <div>
      <h1>Download Ticket</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ticket ID:</label>
          <input
            type="text"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
          />
        </div>
        <button type="submit">Download Ticket</button>
      </form>
    </div>
  );
};

export default DownloadTicket;
