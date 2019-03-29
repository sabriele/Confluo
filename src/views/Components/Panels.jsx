import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";

import { cardTitle } from "assets/jss/confluo.jsx";

import HomeworkRecords from "./HomeworkRecords";
import AssesmentRecords from "./AssesmentRecords";

var moment = require("moment");

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};

class Panels extends React.Component {
  render() {
    const { classes, student } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <GridContainer>
                <GridItem xs={6}>
                  <CardHeader>
                    <h1 className={classes.cardTitle}>
                      {student.firstName} {student.lastName}
                    </h1>
                  </CardHeader>
                </GridItem>
                <GridItem xs={6}>
                  <CardAvatar
                    profile
                    style={{
                      margin: "-50px 20px 0 auto",
                      width: "130px",
                      height: "130px"
                    }}
                  >
                    <img
                      src={student.imageUrl}
                      alt="..."
                      style={{
                        width: "auto",
                        height: "100%",
                        marginLeft: "-25%"
                      }}
                    />
                  </CardAvatar>
                </GridItem>
              </GridContainer>
              <CardBody>
                <NavPills
                  color="info"
                  tabs={[
                    {
                      tabButton: "Homework",
                      tabContent: <HomeworkRecords />
                    },
                    {
                      tabButton: "Profile",
                      tabContent: (
                        <span>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Name:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                {student.firstName} {student.lastName}
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Email:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>{student.email}</h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Level:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                {student.level.type} {student.level.year}
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>
                                  Subjects:
                                </h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                {student.subjects.map((subject, i) => [
                                  i > 0 && ", ",
                                  <span key={i}>{subject}</span>
                                ])}
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Address:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>{student.address}</h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>
                                  Schedule:
                                </h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                <ul style={{ padding: "0" }}>
                                  {student.schedules.map((schedule, i) => [
                                    <li key={i} style={{ listStyle: "none" }}>
                                      {schedule.day},{" "}
                                      {moment(schedule.time).format("hA")} for{" "}
                                      {schedule.duration}{" "}
                                      {schedule.duration === 1
                                        ? "hour"
                                        : "hours"}
                                    </li>
                                  ])}
                                </ul>
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Rates:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                ${student.rates}
                                /hour
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Active:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>{student.active ? "Yes" : "No"}</h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>
                                  Start Date:
                                </h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>{student.startDate}</h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>
                                  Referrer:
                                </h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>
                                {student.referrer ? student.referrer : "-"}
                              </h6>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>
                            <GridItem xs={12} lg={2}>
                              <Info>
                                <h6 style={{ textAlign: "right" }}>Notes:</h6>
                              </Info>
                            </GridItem>
                            <GridItem xs={12} lg={10}>
                              <h6>{student.notes ? student.notes : "-"}</h6>
                            </GridItem>
                          </GridContainer>
                        </span>
                      )
                    },
                    {
                      tabButton: "Test & Exam Records",
                      tabContent: <AssesmentRecords />
                    }
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Panels);
