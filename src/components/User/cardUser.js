import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const CardUser = (props) => {
  return (
    <TableRow>
      <TableCell>{props.request.name}</TableCell>
      <TableCell>{props.request.email}</TableCell>
      <TableCell>{props.request.role.name}</TableCell>
      <TableCell>
        {props.request.enabled == true ? (
          <input
            type="checkbox"
            defaultChecked
            onClick={() => {
              alert(props.request.id + ' ' + props.request.role);
            }}
          />
        ) : (
          <input
            type="checkbox"
            onClick={() => {
              alert(props.request.id + ' ' + props.request.role);
            }}
          />
        )}
      </TableCell>
    </TableRow>
  );
};
export default CardUser;
