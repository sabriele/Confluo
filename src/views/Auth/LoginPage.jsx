import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import loginPageStyle from "assets/jss/views/loginPageStyle";

class LoginPage extends React.Component {
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
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <Card className={classes.cardSignup}>
              <h2 className={classes.cardTitle}>Log In</h2>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={10} md={10}>
                    <form className={classes.form}>
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Email className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          placeholder: "Email..."
                        }}
                      />
                      <CustomInput
                        formControlProps={{
                          fullWidth: true,
                          className: classes.customFormControlClasses
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment
                              position="start"
                              className={classes.inputAdornment}
                            >
                              <Icon className={classes.inputAdornmentIcon}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          placeholder: "Password..."
                        }}
                      />
                      <div
                        className={classes.center}
                        style={{ paddingTop: "50px" }}
                      >
                        <Button round color="linkedin">
                          {`Let's go!`}
                        </Button>
                      </div>
                    </form>
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

export default withStyles(loginPageStyle)(LoginPage);
