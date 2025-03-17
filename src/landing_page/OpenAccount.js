import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-3 mb-5">
      <div className="row text-center">
        <h2 className="mt-5 mb-4 text-muted">Open a Zerodha account</h2>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 mt-4 btn btn-primary fs-5 mb-5"
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

export default OpenAccount;
