import React from "react";

function Hero() {
  return (
    <section style={{height:"465px"}} className="container-fluid" id="supportHero">
      <div className="px-5 pt-5 pb-4" id="supportWrapper">
        <p style={{fontSize:"22px",fontWeight:"30px"}}>Support Portal</p>
        <a href="" style={{textDecoration:"none",border:"1px solid",borderTop:"0px",borderRight:"0px",borderLeft:"0px",height:"26px",fontSize:"17px"}}>Track Tickets</a>
      </div>
      <div className="row">
        <div style={{paddingLeft:"83px"}} className=" col-7 mb-5" id="support_link">
          <p style={{lineHeight:"1.9rem",fontSize:"24px"}} >
            Search for an answer or browse help topics to create a<br/> ticket
          </p>
          <input className="mt-3 mb-3" placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" className="me-3" style={{textDecoration:"none"}}>Track account opening</a>
          <a href="" className="me-3" style={{textDecoration:"none"}} >Track segment activation</a>
          <a href="" className="me-3" style={{textDecoration:"none"}} >Intraday margins</a><br/><br/>
          <a href="" className="me-3" style={{textDecoration:"none"}} >Kite user manual</a>
        </div>
        <div className="col-5 p-3">
          <p className="fs-4">Featured</p>
          <ol>
            <li >
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-4">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
