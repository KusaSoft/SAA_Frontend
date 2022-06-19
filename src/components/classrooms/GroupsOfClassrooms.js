import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import {ExpandMore} from '@mui/icons-material';
import {FLOORS} from '../../services/Constant';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';

export default function GroupOfClassrooms(props) {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor: 'background.paper'}}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            variant="scrollable"
          >
            {[...props.classrooms].map((value) => (
              <Tab
                key={value[0]}
                label={value[0]}
                onClick={() => {
                  props.setClassroomsSelected([]);
                }}
              />
            ))}
          </TabList>
        </Box>
        {[...props.classrooms].map((value, index) => (
          <TabPanel
            sx={{
              minWidth: {xs: 320, sm: 480},
              minHeight: {xs: 320, sm: 480},
              bgcolor: 'background.paper',
            }}
            value={index}
          >
            <Box sx={{width: '100%'}}>
              {[...Object.values(FLOORS)].map((floor) => {
                return value[1].some(
                  (classroom) => floor === classroom.floor
                ) ? (
                  <Accordion
                    expanded={expanded === floor}
                    onChange={handleChangeExpanded(floor)}
                    onClick={() => {
                      props.setClassroomsSelected([]);
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        variant="h6"
                        sx={{width: '33%', flexShrink: 0}}
                      >
                        {floor}
                      </Typography>
                      <Typography
                        variant="body"
                        sx={{
                          paddingLeft: '1rem',
                        }}
                      >
                        Capacidad:{' '}
                        {value[1].reduce((acc, classroom) => {
                          if (classroom.floor === floor) {
                            return acc + classroom.amount;
                          }
                          return acc;
                        }, 0)}
                      </Typography>
                    </AccordionSummary>
                    {value[1].map((classroom) => {
                      return classroom.floor === floor ? (
                        <Box>
                          <ListItem key={classroom.id}>
                            <Checkbox
                              checked={props.classroomsSelected.some(
                                (classroomSelected) =>
                                  classroomSelected.id === classroom.id
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  props.setClassroomsSelected([
                                    ...props.classroomsSelected.concat([
                                      classroom,
                                    ]),
                                  ]);
                                } else {
                                  props.setClassroomsSelected([
                                    ...props.classroomsSelected.filter(
                                      (myClassroom) => {
                                        return (
                                          myClassroom.id !== classroom.id
                                        );
                                      }
                                    ),
                                  ]);
                                }
                              }}
                            />
                            <Typography
                              sx={{
                                paddingRight: '1rem',
                              }}
                            >
                              {classroom.name_classroom}{' '}
                            </Typography>{' '}
                            <Typography>
                              <b>Capacidad: </b>
                              {classroom.amount}
                            </Typography>
                          </ListItem>
                        </Box>
                      ) : null;
                    })}
                  </Accordion>
                ) : null;
              })}
            </Box>
          </TabPanel>
        ))}
      </TabContext>
      {/* <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          {[...props.classrooms].map((value) => (
            <Grid key={value} item>
              <Box
                sx={{
                  minWidth: 190,
                  padding: 1,
                }}
              >
                <Accordion
                  sx={{
                    width: '100%',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h5">{value[0]}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      {[...Object.values(FLOORS)].map((floor) => {
                        return value[1].some(
                          (classroom) => floor === classroom.floor
                        ) ? (
                          <List>
                            <Typography variant="h6">{floor}</Typography>
                            {value[1].map((classroom) => {
                              return classroom.floor === floor ? (
                                <ListItem key={classroom.id}>
                                  <Checkbox
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        props.setClassroomsSelected([
                                          ...props.classroomsSelected.concat(
                                            [classroom]
                                          ),
                                        ]);
                                      } else {
                                        props.setClassroomsSelected([
                                          ...props.classroomsSelected.filter(
                                            (myClassroom) => {
                                              return (
                                                myClassroom.id !==
                                                classroom.id
                                              );
                                            }
                                          ),
                                        ]);
                                      }
                                    }}
                                  />
                                  <Typography
                                    sx={{
                                      paddingRight: '1rem',
                                    }}
                                  >
                                    {classroom.name_classroom}{' '}
                                  </Typography>{' '}
                                  <Typography>
                                    <b>Capacidad: </b>
                                    {classroom.amount}
                                  </Typography>
                                </ListItem>
                              ) : null;
                            })}
                          </List>
                        ) : null;
                      })}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
          ))}
        </Grid> 
      </Grid>
        */}
    </Box>
  );
}
