/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import Search from "@material-ui/icons/Search";
import DateRange from "@material-ui/icons/DateRange";
import Clear from "@material-ui/icons/Clear";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import dashboardStyle from "assets/jss/views/dashboardStyle";

var moment = require("moment");

const isDev = process.env.NODE_ENV !== "production";
const url = isDev
  ? "http://localhost:3001"
  : "https://confluo-api.herokuapp.com";

class Dashboard extends React.Component {
  state = {
    value: 0,
    students: []
  };
  componentDidMount() {
    fetch(`${url}/students`, {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(students => this.setState({ students }));
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleDelete = async id => {
    await fetch(`${url}/students/${id}`, {
      method: "DELETE",
      credentials: "include"
    });
    const res = await fetch(`${url}/students`, {
      method: "GET",
      credentials: "include"
    });
    const students = await res.json();
    this.setState({ students });
  };
  render() {
    const { classes } = this.props;
    const searchButton = classes.top + " " + classes.searchButton + " ";
    const { students } = this.state;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={9} lg={9}>
            <GridContainer>
              <GridItem xs={12} lg={4}>
                <Card>
                  <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                      <Icon>attach_money</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>
                      Revenue for month of <strong>February</strong>
                    </p>
                    <h3 className={classes.cardTitle}>$3,245</h3>
                  </CardHeader>
                  <CardBody />
                </Card>
              </GridItem>
              <GridItem xs={12} lg={4}>
                <Card>
                  <CardHeader color="warning" stats icon>
                    <CardIcon color="warning">
                      <Store />
                    </CardIcon>
                    <p className={classes.cardCategory}>Classes</p>
                    <h3 className={classes.cardTitle}>9</h3>
                  </CardHeader>
                  <CardBody />
                </Card>
              </GridItem>
              <GridItem xs={12} lg={4}>
                <Card>
                  <CardHeader color="primary" stats icon>
                    <CardIcon color="primary">
                      <Icon>face</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Students</p>
                    <h3 className={classes.cardTitle}>12</h3>
                  </CardHeader>
                  <CardBody />
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12}>
                <Card>
                  <CardHeader color="danger" icon>
                    <CardIcon color="danger">
                      <Icon>error_outline</Icon>
                    </CardIcon>
                    <h3 className={classes.cardIconTitle}>Pending Payments</h3>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12}>
                        <Table
                          tableData={[
                            ["Reuben", "3 hours", "$ 105"],
                            ["Luke", "6 hours", "$ 270"],
                            ["Keith", "1.5 hours", "$ 60"],
                            ["Ben", "1 hour", "$ 40"],
                            ["Ella", "1 hour", "$ 40"],
                            ["Daryl", "2 hours", "$ 90"],
                            ["Arnav", "2 hours", "$ 90"]
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="space-between" alignItems="center">
              <GridItem xs={12} sm={9}>
                <h3>Manage Students</h3>
              </GridItem>
              <GridItem xs={12} sm={3}>
                <CustomInput
                  formControlProps={{
                    className: classes.top + " " + classes.search
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: classes.searchInput
                    }
                  }}
                />
                <Button
                  color="white"
                  aria-label="edit"
                  justIcon
                  round
                  className={searchButton}
                >
                  <Search
                    className={
                      classes.headerLinksSvg + " " + classes.searchIcon
                    }
                  />
                </Button>
              </GridItem>
            </GridContainer>
            <br />
            <GridContainer>
              {students.length > 0 && (
                <React.Fragment>
                  {students.map(
                    (student, i) =>
                      student.active ? (
                        <GridItem xs={12} sm={12} md={4} key={i}>
                          <Card product className={classes.cardHover}>
                            <CardHeader
                              image
                              className={classes.cardHeaderHover}
                            >
                              <img src={student.imageUrl} alt="..." />
                            </CardHeader>
                            <CardBody>
                              <div className={classes.cardHoverUnder}>
                                <Tooltip
                                  id="tooltip-top"
                                  title="Edit"
                                  placement="bottom"
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Link to={`/students/${student.id}/edit`}>
                                    <Button color="success" simple justIcon>
                                      <Edit
                                        className={classes.underChartIcons}
                                      />
                                    </Button>
                                  </Link>
                                </Tooltip>
                                <Tooltip
                                  id="tooltip-top"
                                  title="Remove"
                                  placement="bottom"
                                  classes={{ tooltip: classes.tooltip }}
                                >
                                  <Button
                                    color="danger"
                                    simple
                                    justIcon
                                    onClick={() =>
                                      this.handleDelete(student.id)
                                    }
                                  >
                                    <Clear
                                      className={classes.underChartIcons}
                                    />
                                  </Button>
                                </Tooltip>
                              </div>
                              <h4 className={classes.cardProductTitle}>
                                {student.firstName} {student.lastName}
                              </h4>
                              <div style={{ textAlign: "center" }}>
                                <h6 className={classes.cardProductDesciption}>
                                  {student.level.type} {student.level.year} |{" "}
                                  {student.subjects.map((subject, i) => [
                                    i > 0 && ", ",
                                    <span key={i}>{subject}</span>
                                  ])}
                                </h6>
                              </div>
                              <ul>
                                {student.schedules.map((schedule, i) => [
                                  <li key={i}>
                                    {schedule.day},{" "}
                                    {moment(schedule.time).format("hA")} for{" "}
                                    {schedule.duration}{" "}
                                    {schedule.duration === 1 ? "hour" : "hours"}
                                  </li>
                                ])}
                              </ul>
                            </CardBody>
                            <CardFooter product>
                              <div
                                className={`${classes.stats} ${
                                  classes.productStats
                                }`}
                              >
                                <Place /> {student.address}
                              </div>
                              <Button
                                className={`${classes.stats} ${
                                  classes.productStats
                                }`}
                                color="transparent"
                                simple
                                component={Link}
                                to={`/students/${student.id}`}
                                style={{ padding: "12px 0px" }}
                              >
                                View »
                              </Button>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      ) : (
                        ""
                      )
                  )}
                </React.Fragment>
              )}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={3} lg={3}>
            <Card>
              <CardHeader color="info" icon>
                <CardIcon color="info">
                  <DateRange />
                </CardIcon>
                <h3 className={classes.cardIconTitle}>Next Lessons</h3>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12}>
                    <Table
                      tableData={[
                        ["Reuben", "Thu", "March 7th", "3PM"],
                        ["Luke", "Fri", "March 8th", "7PM"],
                        ["Keith", "Sat", "March 9th", "10AM"],
                        ["Ben", "Sun", "March 10th", "9AM"],
                        ["Ella", "Mon", "March 11th", "7PM"],
                        ["Luke", "Tue", "March 12th", "7PM"],
                        ["Daryl", "Tue", "March 12th", "7PM"],
                        ["Arnav", "Tue", "March 12th", "7PM"],
                        ["Farid", "Wed", "March 13th", "7PM"],
                        ["Farida", "Wed", "March 13th", "9PM"]
                      ]}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
