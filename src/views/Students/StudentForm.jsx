import React from "react";
import Datetime from "react-datetime";
import { cloneDeep } from "lodash";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import Button from "components/CustomButtons/Button.jsx";

import regularFormsStyle from "assets/jss/views/regularFormsStyle";

const isDev = process.env.NODE_ENV !== "production";
const url = isDev
  ? "http://localhost:3001"
  : "https://confluo-api.herokuapp.com";

class StudentForm extends React.Component {
  state = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    level: { type: "", year: "" },
    subjects: [],
    address: "",
    schedules: [{ day: "", time: "", duration: "" }],
    rates: "",
    active: true,
    startDate: "",
    referrer: "",
    notes: ""
  };

  handleCustomInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubject = event => {
    const input = event.target.value;
    if (input.includes(",")) {
      const subjects = input.split(",").map(n => n.trim());
      this.setState({ subjects: [...subjects] });
    } else {
      this.setState({ subjects: [input] });
    }
  };

  handleLevel = event => {
    const { level } = this.state;
    level[event.target.name] = event.target.value;
    this.setState({ level });
  };

  handleSchedule = event => {
    const schedules = cloneDeep(this.state.schedules);
    const schedule = schedules[0];
    schedule[event.target.name] = event.target.value;
    this.setState({ schedules });
  };

  handleTime = time => {
    const { schedules } = this.state;
    const schedule = schedules[0];
    schedule.time = time._d.toString();
    this.setState({ schedules });
  };

  handleStartDate = date => {
    this.setState({ startDate: date._d.toString() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { rates, schedules, level } = this.state;
    let student = { ...this.state };
    student.rates = parseFloat(rates);
    student.schedules = schedules.map(schedule => {
      schedule.duration = parseFloat(schedule.duration);
      return schedule;
    });
    student.level.year = parseInt(level.year);

    fetch(`${url}/students`, {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
      credentials: "include"
    })
      .then(res => {
        if (res.status === 201) {
          this.props.history.push("/dashboard");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(() => {
        console.error("Error while adding a student");
      });
  };

  render() {
    const { classes } = this.props;
    const { level, email } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Icon>face</Icon>
              </CardIcon>
            </CardHeader>
            <CardBody>
              <form onSubmit={this.handleSubmit}>
                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Email
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.handleCustomInput(event),
                        name: "email",
                        type: "text"
                      }}
                      value={email}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      First Name
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <CustomInput
                          id="first-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "",
                            onChange: event => this.handleCustomInput(event),
                            name: "firstName",
                            type: "text"
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Last Name
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <CustomInput
                          id="last-name"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "",
                            onChange: event => this.handleCustomInput(event),
                            name: "lastName",
                            type: "text"
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Address
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "",
                        onChange: event => this.handleCustomInput(event),
                        name: "address",
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Level
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="level-select"
                            className={classes.selectLabel}
                          />
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={level.type}
                            onChange={this.handleLevel}
                            inputProps={{
                              name: "type",
                              id: "type"
                            }}
                          >
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="-"
                            >
                              -
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Primary"
                            >
                              Primary
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Secondary"
                            >
                              Secondary
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="Pre-university"
                            >
                              Pre-university
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Year
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={2}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <FormControl
                          fullWidth
                          className={classes.selectFormControl}
                        >
                          <InputLabel
                            htmlFor="year-select"
                            className={classes.selectLabel}
                          />
                          <Select
                            MenuProps={{
                              className: classes.selectMenu
                            }}
                            classes={{
                              select: classes.select
                            }}
                            value={level.year}
                            onChange={this.handleLevel}
                            inputProps={{
                              name: "year",
                              id: "year-select"
                            }}
                          >
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="blank"
                            >
                              -
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="1"
                              disabled={level.type === "-"}
                            >
                              1
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="2"
                              disabled={level.type === "-"}
                            >
                              2
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="3"
                              disabled={level.type === "-"}
                            >
                              3
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="4"
                              disabled={
                                level.type === "-" ||
                                level.type === "Pre-university"
                              }
                            >
                              4
                            </MenuItem>

                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="5"
                              disabled={
                                level.type === "-" ||
                                level.type === "Pre-university"
                              }
                            >
                              5
                            </MenuItem>
                            <MenuItem
                              classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                              }}
                              value="6"
                              disabled={
                                level.type === "-" ||
                                level.type === "Secondary" ||
                                level.type === "Pre-university"
                              }
                            >
                              6
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Subjects
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={3}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <CustomInput
                          id="subjects"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "",
                            onChange: event => this.handleSubject(event),
                            name: "subjects",
                            type: "text"
                          }}
                          helpText="Seperate different subjects with commas"
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Schedule
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <GridItem xs={12}>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="day-select"
                              className={classes.selectLabel}
                            >
                              Day
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu
                              }}
                              classes={{
                                select: classes.select
                              }}
                              value={this.state.schedules[0].day}
                              onChange={this.handleSchedule}
                              inputProps={{
                                name: "day",
                                id: "day-select"
                              }}
                            >
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Sunday"
                              >
                                Sunday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Monday"
                              >
                                Monday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Tuesday"
                              >
                                Tuesday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Wednesday"
                              >
                                Wednesday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Thursday"
                              >
                                Thursday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Friday"
                              >
                                Friday
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Saturday"
                              >
                                Saturday
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </GridItem>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <FormControl fullWidth style={{ marginTop: "24px" }}>
                          <Datetime
                            dateFormat={false}
                            onChange={this.handleTime}
                            inputProps={{
                              placeholder: "Pick a time",
                              name: "time"
                            }}
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          id="duration"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "",
                            onChange: event => this.handleSchedule(event),
                            name: "duration",
                            type: "number"
                          }}
                          helpText="Duration (number of hours)"
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Hourly Rate
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="image-url"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "",
                        onChange: event => this.handleCustomInput(event),
                        name: "rates",
                        type: "number",
                        startAdornment: "$ "
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Image URL
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="image-url"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "",
                        onChange: event => this.handleCustomInput(event),
                        name: "imageUrl",
                        type: "text"
                      }}
                    />
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Start Date
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <FormControl fullWidth style={{ marginTop: "24px" }}>
                          <Datetime
                            timeFormat={false}
                            onChange={this.handleStartDate}
                            inputProps={{ placeholder: "Pick a day" }}
                          />
                        </FormControl>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                  <GridItem xs={12} sm={1}>
                    <FormLabel className={classes.labelHorizontal}>
                      Referrer
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <GridContainer>
                      <GridItem xs={12}>
                        <CustomInput
                          id="referrer"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            placeholder: "",
                            onChange: event => this.handleCustomInput(event),
                            name: "referrer",
                            type: "text"
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

                <GridContainer>
                  <GridItem xs={12} sm={2}>
                    <FormLabel className={classes.labelHorizontal}>
                      Notes
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={9}>
                    <CustomInput
                      id="notes"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: event => this.handleCustomInput(event),
                        name: "notes",
                        type: "text",
                        multiline: true,
                        rows: 4
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={9} />
                  <GridItem xs={12} sm={2}>
                    <Button type="submit" color="primary" fullWidth>
                      Submit
                    </Button>
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(regularFormsStyle)(StudentForm);
