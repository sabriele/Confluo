import Dashboard from "views/Dashboard/Dashboard.jsx";
import StudentForm from "views/Students/StudentForm.jsx";
import Students from "views/Students/Students.jsx";
import Student from "views/Students/Student.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
// import ContentPaste from "@material-ui/icons/ContentPaste";
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
    path: "/students",
    name: "All Students",
    icon: "content_paste",
    views: [
      {
        path: "/students/new",
        name: "New Student",
        mini: "NS",
        component: StudentForm
      },
      {
        path: "/students/:id",
        name: "Student",
        mini: "S",
        component: Student
      },
      {
        path: "/students/",
        pathTo: "/students",
        name: "All Students",
        mini: "AS",
        component: Students
      }
    ]
  },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
