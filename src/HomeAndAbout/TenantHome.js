import React from "react";
import "./TenantHome.css";

function TenantHome({ tenantCards }) {

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const username =
    currentUser?.username || "Tenant";

  // Count unique owners
  const owners = [
    ...new Set(
      tenantCards.map((card) => card.owner)
    ),
  ];

  return (

    <div className="tenant-home-container">

      <h1>
        Hello {username}
      </h1>

      <p className="welcome-text">
        Welcome back to your Tenant Dashboard.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            {tenantCards.length}
          </h2>

          <p>
            Selected Properties
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            {owners.length}
          </h2>

          <p>
            Owners You're Working With
          </p>

        </div>

      </div>

      <div className="summary-box">

        <h2>
          Owner Summary
        </h2>

        <p>

          Property owners on Apartment Finder can:

        </p>

        <ul>

          <li>Create apartment listings.</li>

          <li>Upload apartment images.</li>

          <li>Set rental prices.</li>

          <li>Specify the number of available rooms.</li>

          <li>Provide apartment descriptions.</li>

          <li>Manage their listed properties.</li>

        </ul>

      </div>

    </div>

  );

}

export default TenantHome;