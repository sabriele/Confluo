import LoginPage from "views/Auth/LoginPage.jsx";
import RegisterPage from "views/Auth/RegisterPage.jsx";

// @material-ui/icons
import PersonAdd from "@material-ui/icons/PersonAdd";
import Fingerprint from "@material-ui/icons/Fingerprint";

const authRoutes = [
  {
    path: "/user/register",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: PersonAdd,
    component: RegisterPage
  },
  {
    path: "/user/login",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: Fingerprint,
    component: LoginPage
  }
];

export default authRoutes;
