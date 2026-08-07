import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

import "./Navbar.css";



function Navbar({ sidebarData, logout }) {


  const [sidebar, setSidebar] = useState(false);


  const navigate = useNavigate();





  const showSidebar = () => {

    setSidebar((prev)=>!prev);

  };






  const handleLogout = () => {


    logout();


    navigate("/login");


  };







  const currentUser =

    JSON.parse(

      sessionStorage.getItem("currentUser")

    ) || null;






  const username =

    currentUser?.username || "User";






  const accountType =

    currentUser?.role === "owner"

    ?

    "Owner Account"

    :

    "Tenant Account";









  return (

    <IconContext.Provider value={{color:"#fff"}}>





      <div className="navbar">





        <Link

          to="#"

          className="menu-bars"

        >



          <FaIcons.FaBars

            onClick={showSidebar}

          />



        </Link>








        <h2 className="navbar-title">


          Property Management System


        </h2>








        <div className="user-profile">





          <FaIcons.FaUserCircle

            className="user-icon"

          />








          <div className="user-details">





            <span className="username">


              {username}


            </span>








            <span className="account-type">


              {accountType}


            </span>







          </div>






        </div>







      </div>









      <nav

        className={

          sidebar

          ?

          "nav-menu active"

          :

          "nav-menu"

        }

      >







        <ul className="nav-menu-items">







          <li className="navbar-toggle">





            <Link

              to="#"

              className="menu-bars"

              onClick={showSidebar}

            >



              <AiIcons.AiOutlineClose/>




            </Link>





          </li>









          <div className="sidebar-links">







            {

              sidebarData.map((item,index)=>(






                <li

                  key={index}

                  className={item.cName}

                >






                  <Link

                    to={item.path}

                    onClick={showSidebar}

                  >





                    {item.icon}






                    <span>


                      {item.title}


                    </span>





                  </Link>






                </li>





              ))



            }






          </div>









          <li className="logout-item">






            <button

              className="sidebar-logout-btn"

              onClick={handleLogout}

            >





              <FaIcons.FaSignOutAlt/>






              <span>


                Logout


              </span>





            </button>






          </li>






        </ul>






      </nav>







    </IconContext.Provider>

  );

}



export default Navbar;