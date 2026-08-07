import React from "react";
import "./Home.css";

function Home({ cards, tenantCards }) {

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const username =
    currentUser?.username || "Owner";

  return (

    <div className="home-container">

      <h1>
        Hello {username}
      </h1>

      <p className="welcome-text">
        Welcome back to your Owner Dashboard.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">

          <h2>
            {cards.length}
          </h2>

          <p>
            Properties Offered
          </p>

        </div>

        <div className="dashboard-card">

          <h2>
            {tenantCards.length}
          </h2>

          <p>
            Properties Selected
          </p>

        </div>

      </div>

      <div className="summary-box">

        <h2>
          Owner Summary
        </h2>

        <p>

          As an Owner you can:

        </p>

        <ul>

          <li>Create property cards.</li>

          <li>Delete properties.</li>

          <li>View available properties.</li>

          <li>Monitor how many properties tenants have selected.</li>

        </ul>

      </div>

    </div>

  );

}

export default Home;