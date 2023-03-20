import React from "react";
import Draggable from "react-draggable";

const DragAndMove = () => {
  const dragText = (e, data) => {
    console.log("event-type", e.type);
    console.log({ e, data });
  };
  return (
    <Draggable
      onStart={dragText}
      // onStop={dragText}
      // onDrag={dragText}
    >
      <div style={{ border: "2px solid red", padding: "1rem", width: "30%" }}>
        <div className="handle">Drag from here</div>
        <div>
          This readme is really dragging on the onDrag react event listener...
        </div>
      </div>
    </Draggable>
  );
};

export default DragAndMove;
