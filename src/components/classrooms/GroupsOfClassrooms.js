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
  Typography,
} from '@mui/material';

export default function GroupOfClassrooms(props) {
  return (
    <Grid sx={{flexGrow: 1}} container spacing={1}>
      <Grid item xs={12}>
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
                                    onChange={(e) =>
                                      props.setClassroomsSelected([
                                        ...props.classroomsSelected.concat(
                                          [classroom]
                                        ),
                                      ])
                                    }
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
    </Grid>
  );
}
