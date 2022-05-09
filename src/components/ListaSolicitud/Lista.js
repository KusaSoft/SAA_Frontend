import React from "react";
import Card from "./Card";

const Lista = (props) => {
  if (props.list.length !== 0) {
    return (
      <div style={{ width: "99%" }}>
        {props.list.map((element) => {
          return (
            <div key={element[0]}>
              <Card request={element} />
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
