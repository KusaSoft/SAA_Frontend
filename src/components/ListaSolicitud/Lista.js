import React from 'react';

import SimpleCard from './Card';


const Lista = (props) => {
  if (props.list.length !== 0) {
    return (

      <div style={{width: '80%'}}>
        {props.list.map((element) => {
          return (
            <div key={element[0]}>
              <SimpleCard request={element} />

            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>{props.emptyMessage}</div>;
  }
};
export default Lista;
