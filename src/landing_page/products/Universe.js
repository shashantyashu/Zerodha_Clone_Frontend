import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-2 mt-5">
          <img
            style={{ width: "200px" }}
            src="media/images/zerodhafundhouse.png"
          />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Our asset management venture
            <br /> that is creating simple and transparent index
            <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4 mt-5">
          <img
            style={{ width: "200px" }}
            src="media/images/sensibull-logo.svg"
          />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Options trading platform that lets you
            <br /> create strategies, analyze positions, and examine
            <br /> data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-2 mt-5">
          <img style={{ width: "170px" }} src="media/images/tijori.svg" />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Investment research platform
            <br /> that offers detailed insights on stocks,
            <br /> sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "200px" }} src="media/images/streak-logo.png" />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Systematic trading platform
            <br /> that allows you to create and backtest
            <br /> strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            style={{ width: "200px" }}
            src="media/images/smallcase-logo.png"
          />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Thematic investing platform
            <br /> that helps you invest in diversified
            <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{ width: "140px" }} src="media/images/ditto-logo.png" />
          <p
            style={{ fontSize: "12px", width: "265px" }}
            className="text-small mt-4 ms-5 text-muted"
          >
            Personalized advice on life
            <br /> and health insurance. No spam
            <br /> and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          <Link
            to="http://localhost:3000"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign up for free
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Universe;
