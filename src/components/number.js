import React from "react";

function Number(props) {
  return (
    <div className="counter" style={{ background: props.color }}>
      {props.value}
    </div>
  );
}
export { Number };
