import Dashboard from "views/Dashboard/Dashboard.jsx";
import Panels from "views/Components/Panels.jsx";
import Notifications from "views/Components/Notifications.jsx";
import StudentForm from "views/Forms/StudentForm.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import DateRange from "@material-ui/icons/DateRange";

var pages = [
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      }
    ]
  },
  {
    collapse: true,
    path: "/students",
    name: "Students",
    state: "openForms",
    icon: "content_paste",
    views: [
      {
        path: "/students/new",
        name: "New Student",
        mini: "RF",
        component: StudentForm
      }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
