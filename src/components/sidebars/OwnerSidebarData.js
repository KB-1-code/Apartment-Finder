import {
  FaTools,
  FaHome,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaComments
} from "react-icons/fa";

import {
  GrOverview
} from "react-icons/gr";



export const OwnerSidebarData = [



  {
    title:"Home",
    path:"/home",
    icon:<FaHome />,
    cName:"nav-text",
  },



  {
    title:"Card Maker",
    path:"/cardmaker",
    icon:<FaTools />,
    cName:"nav-text",
  },



  {
    title:"Tenant View",
    path:"/tenantview",
    icon:<GrOverview />,
    cName:"nav-text",
  },



  {
    title:"Messages",
    path:"/ownermessage",
    icon:<FaComments />,
    cName:"nav-text",
  },



  {
    title:"Map",
    path:"/map",
    icon:<FaMapMarkedAlt />,
    cName:"nav-text",
  },



  {
    title:"About",
    path:"/about",
    icon:<FaInfoCircle />,
    cName:"nav-text",
  },



];