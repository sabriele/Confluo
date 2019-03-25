/* eslint-disable react/jsx-key */
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import extendedTablesStyle from "assets/jss/views/extendedTablesStyle.jsx";

class LessonRecords extends React.Component {
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
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h3 className={classes.cardIconTitle}>Lessons</h3>
            </CardHeader>
            <CardBody>
              <Table
                tableHead={["Date", "Time", "Duration", ""]}
                tableData={[
                  [
                    "Sunday, 10 Mar 2019",
                    "9 AM",
                    "1 hour",
                    <Checkbox
                      className={classes.positionAbsolute}
                      tabIndex={-1}
                      onClick={() => this.handleToggle(1)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  ],
                  {
                    color: "warning",
                    data: [
                      "Sunday, 3 Mar 2019",
                      "3 PM",
                      "1 hour",
                      <Checkbox
                        checked
                        className={classes.positionAbsolute}
                        tabIndex={-1}
                        onClick={() => this.handleToggle(2)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot
                        }}
                      />
                    ]
                  },
                  [
                    "Sunday, 24 Feb 2019",
                    "9 AM",
                    "1 hour",
                    <Checkbox
                      checked
                      className={classes.positionAbsolute}
                      tabIndex={-1}
                      onClick={() => this.handleToggle(3)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  ],
                  [
                    "Sunday, 17 Feb 2019",
                    "9 AM",
                    "1 hour",
                    <Checkbox
                      checked
                      className={classes.positionAbsolute}
                      tabIndex={-1}
                      onClick={() => this.handleToggle(4)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  ],
                  [
                    "Sunday, 10 Feb 2019",
                    "9 AM",
                    "1 hour",
                    <Checkbox
                      checked
                      className={classes.positionAbsolute}
                      tabIndex={-1}
                      onClick={() => this.handleToggle(5)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  ]
                ]}
                customCellClasses={[classes.center, classes.center]}
                customClassesForCells={[1, 2]}
                customHeadCellClasses={[classes.center, classes.center]}
                customHeadClassesForCells={[1, 2]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(extendedTablesStyle)(LessonRecords);
