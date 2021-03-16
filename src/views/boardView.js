import React from "react";


export default function BoardView(props) {

  return (
    <div>
      <text>{props.title}</text>
      <ul>
        {props.children}
      </ul>

    </div>
  );
}