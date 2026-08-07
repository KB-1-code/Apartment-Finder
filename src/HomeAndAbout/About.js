import React from "react";
import "./About.css";


function About() {


  return (

    <div className="about-page">


      <div className="about-container">


        <h1 className="about-title">

          About Apartment Finder

        </h1>



        <p className="about-intro">

          Apartment Finder is a property management and apartment discovery
          platform designed to connect property owners with potential tenants
          in a simple and efficient way.

        </p>




        <div className="about-section">


          <h2>

            For Property Owners

          </h2>


          <p>

            Owners can create and manage apartment listings, add property
            details, upload property images, monitor available apartments,
            and keep track of tenant interest through the platform.

          </p>


        </div>





        <div className="about-section">


          <h2>

            For Tenants

          </h2>


          <p>

            Tenants can explore available properties, view apartment details,
            select properties they are interested in, and use the integrated
            map feature to explore locations.

          </p>


        </div>





        <div className="about-section">


          <h2>

            Main Features

          </h2>


          <ul>


            <li>
              User registration and role-based access for owners and tenants.
            </li>


            <li>
              Property card creation and management.
            </li>


            <li>
              Property selection and tenant tracking.
            </li>


            <li>
              Interactive map integration for location exploration.
            </li>


            <li>
              Personalized dashboards for different account types.
            </li>


          </ul>


        </div>





        <div className="about-section">


          <h2>

            Our Goal

          </h2>


          <p>

            The goal of Apartment Finder is to make the process of finding,
            advertising, and managing rental properties faster, easier,
            and more organized through modern web technology.

          </p>


        </div>


      </div>


    </div>

  );

}


export default About;