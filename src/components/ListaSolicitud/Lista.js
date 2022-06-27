import React from 'react';
import {MyBox, MyListBox} from '../../emotion/GlobalComponents';

import SimpleCard from './Card';

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <MyListBox>
        {props.list.map((element) => {
          return <SimpleCard request={element} key={element[0]} />;
        })}
      </MyListBox>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
export default Lista;
