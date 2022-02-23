import React from "react";

const Card = ({ style, component }) => {
  return (
    <div
      className="card"
      style={style}
    >
      {component}
    </div>
  );
};

export default Card;
