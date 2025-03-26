import React from "react";
// const Link = require("react-router-dom").Link;
import {Link} from "react-router-dom";

function Hero() {
  return (
    <div className="container p-3 mb-5">
      <div className="row text-center">
        <img
          style={{ width: "700px" }}
          src="media/images/HomeHero.png"
          alt="Hero Image"
          className="mb-5 m-auto"
        ></img>
        <h1 className="mt-5 text-muted">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 mt-4 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link
            to="https://zerodha-clone-dashboard-5674.netlify.app"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign up for free
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
