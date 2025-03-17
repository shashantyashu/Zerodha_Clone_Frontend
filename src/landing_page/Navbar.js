import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
        <nav class="navBar navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
          <div class="container p-1">
            <div className=""></div>
            <div className="col-6">
            <Link class="navbar-brand" to="/">
              <img style={{width:"25%"}} src="media/images/logo.svg" />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="col-6" style={{}} class="collapse navbar-collapse" id="navbarSupportedContent">
              
              <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to="http://localhost:3000">
                    Signup
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to='/about'>
                    About 
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to='/products'>
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to='/pricing'>
                    Pricing
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active text-muted" aria-current="page" to='/support'>
                    Support
                  </Link>
                </li>
              </ul>
              </form>
            </div>
          </div>
        </nav>
  );
}

export default Navbar;
