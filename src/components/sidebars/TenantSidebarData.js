import {
  FaIdCard,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaComments,
  FaHome
} from "react-icons/fa";

import {
  GrOverview
} from "react-icons/gr";



export const TenantSidebarData = [



  {
    title:"Home",
    path:"/tenanthome",
    icon:<FaHome />,
    cName:"nav-text",
  },



  {
    title:"Tenant View",
    path:"/tenantview",
    icon:<GrOverview />,
    cName:"nav-text",
  },



  {
    title:"My Properties",
    path:"/tenantcard",
    icon:<FaIdCard />,
    cName:"nav-text",
  },



  {
    title:"Messages",
    path:"/tenantmessage",
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