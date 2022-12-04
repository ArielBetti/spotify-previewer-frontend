import { FC, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

// types
import type { TDraggableItems } from "./types";

// ::
const DraggableItems: FC<TDraggableItems> = ({ children }) => {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="flex gap-6 overflow-hidden"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {children}
    </div>
  );
};

export default DraggableItems;
