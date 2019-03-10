/* eslint-disable react/jsx-key */
import React from "react";
import Link from "react-router-dom/Link";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

// material-ui icons
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

import extendedTablesStyle from "assets/jss/confluo/views/extendedTablesStyle.jsx";

class HomeworkRecords extends React.Component {
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
            tableHead={["", "", "Description", "Subject", "Due Date", ""]}
            tableData={[
              [
                "",
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
                />,
                "Volume word problems",
                "Mathematics",
                "10 Mar 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ],
              [
                "",
                <Checkbox
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => this.handleToggle(2)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />,
                "Volume and surface area word problems",
                "Mathematics",
                "3 Mar 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ],
              [
                "",
                <Checkbox
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => this.handleToggle(3)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />,
                "Surface area word problems",
                "Mathematics",
                "24 Feb 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ],
              [
                "",
                <Checkbox
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => this.handleToggle(4)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />,
                "Surface area using nets",
                "Mathematics",
                "17 Feb 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ],
              [
                "",
                <Checkbox
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => this.handleToggle(5)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />,
                "Surface area",
                "Mathematics",
                "10 Feb 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ],
              [
                "",
                <Checkbox
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => this.handleToggle(6)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />,
                "Pg. 13 - 15 of exercise book 3A",
                "Mathematics",
                "3 Feb 2019",
                <Link to="#" style={{ color: "#00acc1" }}>
                  View »
                </Link>
              ]
            ]}
            customCellClasses={[
              classes.right,
              classes.center,
              classes.center,
              classes.center
            ]}
            customClassesForCells={[1, 3, 4, 5]}
            customHeadCellClasses={[
              classes.right,
              classes.center,
              classes.center,
              classes.center
            ]}
            customHeadClassesForCells={[1, 3, 4, 5]}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(extendedTablesStyle)(HomeworkRecords);
