import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

function SupportPage() {
  return (
    <>
      <Hero />
      <div className="row ps-1 pb-4 mt-5">
        <p className="fs-4 ps-5 ms-5 text-muted">To create a ticket, select a relevant topic</p>
      </div>
      <CreateTicket />
    </>
  );
}

export default SupportPage;
