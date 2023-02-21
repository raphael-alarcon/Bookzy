import React from "react";

export var Book = (props: any) => {
  return (
    <div className="book__content">
      <img src={props.image} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.synopsis}</p>
      </div>
    </div>
  );
};
