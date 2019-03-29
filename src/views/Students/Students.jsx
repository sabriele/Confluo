import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import { cardTitle } from "assets/jss/confluo.jsx";

import { getStudents, deleteStudent } from "../../services/studentService";

var moment = require("moment");

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getStudents().map(student => {
        return {
          id: student._id,
          name: `${student.firstName} ${student.lastName}`,
          level: `${student.level.type} ${student.level.year}`,
          subjects: student.subjects.map((subject, i) => [
            i > 0 && ", ",
            <span key={i}>{subject}</span>
          ]),
          schedules: student.schedules.map((schedule, i) => [
            <p key={i}>
              {schedule.day}, {moment(schedule.time).format("hA")}
            </p>
          ]),
          rates: `$ ${student.rates}`,
          startDate: `${student.startDate}`,
          active: `${student.active ? "Yes" : "No"}`,
          actions: (
            <div className="actions-right">
              <Button
                justIcon
                round
                simple
                onClick={() => {}}
                color="warning"
                className="edit"
              >
                <Edit />
              </Button>
              <Button
                justIcon
                round
                simple
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === student._id) {
                      deleteStudent();
                      data.splice(i, 1);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data });
                }}
                color="danger"
                className="remove"
              >
                <Close />
              </Button>
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <SupervisorAccount />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: "Name",
                    accessor: "name"
                  },
                  {
                    Header: "Level",
                    accessor: "level"
                  },
                  {
                    Header: "Subjects",
                    accessor: "subjects"
                  },
                  {
                    Header: "Schedule",
                    accessor: "schedules"
                  },
                  {
                    Header: "Rates",
                    accessor: "rates"
                  },
                  {
                    Header: "Start Date",
                    accessor: "startDate"
                  },
                  {
                    Header: "Current Student",
                    accessor: "active"
                  },
                  {
                    Header: "",
                    accessor: "actions",
                    sortable: false,
                    filterable: false
                  }
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(Students);
