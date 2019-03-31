import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import userProfileStyles from "assets/jss/views/userProfileStyles.jsx";

import Panels from "views/Components/Panels.jsx";
import LessonRecords from "../Components/LessonRecords";

const isDev = process.env.NODE_ENV !== "production";
const url = isDev
  ? "http://localhost:3001"
  : "https://confluo-api.herokuapp.com";

class Student extends React.Component {
  state = {
    value: 0,
    student: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`${url}/students/${id}`, {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(student => this.setState({ student }));
  }

  componentDidUpdate = prevProps => {
    const { id } = this.props.match.params;
    if (prevProps.match.params.id === id) return;
    fetch(`${url}/students/${id}`, {
      method: "GET",
      credentials: "include"
    })
      .then(res => res.json())
      .then(student => this.setState({ student }));
  };

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            {this.state.student && <Panels student={this.state.student} />}
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <LessonRecords />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(userProfileStyles)(Student);
