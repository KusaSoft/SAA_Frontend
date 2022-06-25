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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="95%"
      padding={1}
    >
      <TabContext
        value={value}
        sx={{
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
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
              width: '100%',
              bgcolor: 'background.paper',
            }}
            value={index}
          >
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
                      sx={{
                        paddingRight: '1rem',
                        width: '33%',
                        flexShrink: 0,
                      }}
                    >
                      {floor}
                    </Typography>
                    <Typography variant="body">
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
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
