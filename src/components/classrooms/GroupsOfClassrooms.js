import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import {Box, Checkbox, List, ListItem, Typography} from '@mui/material';

export default function GroupOfClassrooms(props) {
  console.log(props.classrooms);
  return (
    <Grid sx={{flexGrow: 1}} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-between">
          {[...props.classrooms].map((value) => (
            <Grid key={value} item>
              <Box
                sx={{
                  minWidth: 180,
                }}
              >
                <Typography variant="h5">{value[0]}</Typography>
                <List>
                  {value[1].map((classroom) => (
                    <ListItem key={classroom.id}>
                      <Checkbox></Checkbox>
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
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
