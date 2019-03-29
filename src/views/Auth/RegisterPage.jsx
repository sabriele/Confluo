import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import registerPageStyle from "assets/jss/views/registerPageStyle.jsx";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              <Card login className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="info"
                >
                  <h2
                    className={classes.cardTitle}
                    style={{ margin: "25px 0 35px 0" }}
                  >
                    Register
                  </h2>
                </CardHeader>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="firstName"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="lastName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Face className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button color="info" round style={{ marginBottom: "30px" }}>
                    Register
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(registerPageStyle)(RegisterPage);
