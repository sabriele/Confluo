import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import userProfileStyles from "assets/jss/confluo/views/userProfileStyles.jsx";

import Panels from "views/Components/Panels.jsx";
import LessonRecords from "../Components/LessonRecords";
import { getStudents } from "../../services/studentService";

function Student(props) {
  const { id } = props.match.params;
  const student = getStudents().find(student => student._id === id);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Panels student={student} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <LessonRecords />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(userProfileStyles)(Student);
