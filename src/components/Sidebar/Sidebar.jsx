import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/confluo/components/sidebarStyle.jsx";

import avatar from "assets/img/faces/avatar.jpg";

import { getStudents } from "../../services/studentService";

var ps;

class SidebarWrapper extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, user, headerLinks, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {user}
        {headerLinks}
        {links}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openComponents: this.activeRoute("/components"),
      openForms: this.activeRoute("/forms"),
      openTables: this.activeRoute("/tables"),
      openMaps: this.activeRoute("/maps"),
      openPages: this.activeRoute("-page"),
      miniActive: true,
      students: []
    };
    this.activeRoute.bind(this);
  }
  componentDidMount = () => {
    this.setState({ students: getStudents() });
  };
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
  render() {
    const { classes, logo, image, logoText, bgColor } = this.props;
    const { students } = this.state;
    const itemText =
      classes.itemText +
      " " +
      cx({
        [classes.itemTextMini]: this.props.miniActive && this.state.miniActive
      });
    const userWrapperClass =
      classes.user +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    const photo = classes.photo;
    var user = (
      <div className={userWrapperClass}>
        <div className={photo}>
          <img src={avatar} className={classes.avatarImg} alt="..." />
        </div>
        <List className={classes.list}>
          <ListItem className={classes.item + " " + classes.userItem}>
            <NavLink
              to={"/user-page"}
              className={classes.itemLink + " " + classes.userCollapseButton}
              onClick={() => this.openCollapse("openAvatar")}
            >
              <ListItemText
                primary={"Sabrina Tjeng"}
                disableTypography={true}
                className={itemText + " " + classes.userItemText}
              />
            </NavLink>
          </ListItem>
        </List>
      </div>
    );

    var links = (
      <React.Fragment>
        {students.map(
          (student, i) =>
            student.active ? (
              <div style={{ marginBottom: "20px" }} key={i}>
                <div className={photo}>
                  <img
                    src={student.imageUrl}
                    className={classes.avatarImg}
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "100%"
                    }}
                  />
                </div>
                <List className={classes.list}>
                  <ListItem className={classes.item + " " + classes.userItem}>
                    <NavLink
                      to={`/student/${student._id}`}
                      className={
                        classes.itemLink + " " + classes.userCollapseButton
                      }
                      onClick={() => this.openCollapse("openAvatar")}
                    >
                      <ListItemText
                        primary={`${student.firstName} ${student.lastName}`}
                        disableTypography={true}
                        className={itemText + " " + classes.userItemText}
                      />
                    </NavLink>
                  </ListItem>
                </List>
              </div>
            ) : (
              ""
            )
        )}
      </React.Fragment>
    );

    const logoNormal =
      classes.logoNormal +
      " " +
      cx({
        [classes.logoNormalSidebarMini]:
          this.props.miniActive && this.state.miniActive
      });
    const logoMini = classes.logoMini;
    const logoClasses =
      classes.logo +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    var brand = (
      <div className={logoClasses}>
        <a href="/" className={logoMini}>
          <img src={logo} alt="logo" className={classes.img} />
        </a>
        <a href="/" className={logoNormal}>
          {logoText}
        </a>
      </div>
    );
    const drawerPaper =
      classes.drawerPaper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive
      });
    const sidebarWrapper =
      classes.sidebarWrapper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div ref="mainPanel">
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.props.open}
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              headerLinks={<HeaderLinks />}
              links={links}
            />
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor={"left"}
            variant="permanent"
            open
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              links={links}
            />
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(sidebarStyle)(Sidebar);
