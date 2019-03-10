/* eslint-disable react/jsx-key */
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import extendedTablesStyle from "assets/jss/confluo/views/extendedTablesStyle.jsx";

class AssesmentRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Table
            striped
            tableHead={["Name", "Type", "Date", "Mark", "Grade"]}
            tableData={[
              ["Semestral Assesment 2", "Exam", "10 Oct 2018", "79/100", "-"],
              ["Common Test", "Test", "30 Aug 2018", "17/25", "-"],
              ["Class Test", "Test", "27 Jul 2018", "12/20", "-"],
              ["Semestral Assesment 1", "Exam", "15 May 2018", "69/100", "-"],
              ["Common Test", "Test", "5 Mar 2018", "15/25", "-"]
            ]}
            customCellClasses={[
              classes.center,
              classes.center,
              classes.center,
              classes.center
            ]}
            customClassesForCells={[1, 2, 3, 4]}
            customHeadCellClasses={[
              classes.center,
              classes.center,
              classes.center,
              classes.center
            ]}
            customHeadClassesForCells={[1, 2, 3, 4]}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(extendedTablesStyle)(AssesmentRecords);
