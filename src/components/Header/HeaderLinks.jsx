import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/components/headerLinksStyle";

const isDev = process.env.NODE_ENV !== "production";
const url = isDev
  ? "http://localhost:3001"
  : "https://confluo-api.herokuapp.com";

class HeaderLinks extends React.Component {
  state = {
    notificationsOpen: false,
    userMenuOpen: false
  };
  handleNotificationsClick = () => {
    this.setState({ notificationsOpen: !this.state.notificationsOpen });
  };
  handleNotificationsClose = () => {
    this.setState({ notificationsOpen: false });
  };
  handleUserMenuClick = () => {
    this.setState({ userMenuOpen: !this.state.userMenuOpen });
  };
  handleUserMenuClose = () => {
    this.setState({ userMenuOpen: false });
  };
  handleLogout = () => {
    fetch(`${url}/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
      .then(res => {
        if (res.status === 200) return this.props.history.push("/user/login");
        else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        console.error("Error logging out");
      });
  };
  render() {
    const { classes } = this.props;
    const { notificationsOpen, userMenuOpen } = this.state;
    const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover);
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div>
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={notificationsOpen ? "notifications-menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleNotificationsClick}
            className={classes.buttonLink}
            muiClasses={{
              label: ""
            }}
            buttonRef={node => {
              this.anchorEl = node;
            }}
          >
            <Notifications
              className={classes.headerLinksSvg + " " + classes.links}
            />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <span
                onClick={this.handleNotificationsClick}
                className={classes.linkText}
              >
                {"Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={notificationsOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !notificationsOpen,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="notifications-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener
                    onClickAway={this.handleNotificationsClose}
                  >
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleNotificationsClose}
                        className={dropdownItem}
                      >
                        {"New student Andrea Lee first lesson: 18th March"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleNotificationsClose}
                        className={dropdownItem}
                      >
                        {"Ben Ang would like to cancel lesson on 30th March"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleNotificationsClose}
                        className={dropdownItem}
                      >
                        {"Farid Bakar has made payment for 4 lessons"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleNotificationsClose}
                        className={dropdownItem}
                      >
                        {"Farida Bakar has made payment for 4 lessons"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleNotificationsClose}
                        className={dropdownItem}
                      >
                        {
                          "Lesson change request for Keith Chye on 9th March accepted"
                        }
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
          <Button
            color="transparent"
            justIcon
            aria-label="Person"
            aria-owns={userMenuOpen ? "user-menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleUserMenuClick}
            className={classes.buttonLink}
            muiClasses={{
              label: ""
            }}
            buttonRef={node => {
              this.anchorEl = node;
            }}
          >
            <Person className={classes.headerLinksSvg + " " + classes.links} />
            <Hidden mdUp implementation="css">
              <span
                onClick={this.handleUserMenuClick}
                className={classes.linkText}
              >
                {"Notification"}
              </span>
            </Hidden>
          </Button>
          <Popper
            open={userMenuOpen}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !userMenuOpen,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                id="user-menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleUserMenuClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleLogout}
                        className={dropdownItem}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
