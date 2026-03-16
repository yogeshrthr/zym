import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  return (
    <nav className="af-navbar fixed-top">
      <div className="container-fluid h-100 px-4">
        <div className="row align-items-center h-100 g-0">

          {/* Left: avatar + search */}
          <div className="col-auto d-flex align-items-center gap-3">
            <div className="af-avatar">
              <img src="https://i.pravatar.cc/80?img=11" alt="user" />
            </div>
            <input
              type="text"
              className="af-search form-control"
              placeholder="🔍  Search"
            />
          </div>

          {/* Center: links */}
          <div className="col d-flex justify-content-center gap-4">
            <Link className="text-white text-decoration-none small" to="/">Home</Link>
            <Link className="text-white text-decoration-none small" to="/dashboard">My Dashboard</Link>
          </div>

          {/* Right: bell */}
          <div className="col-auto">
            <div className="af-bell">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="af-bell-dot" />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;