import { FC, ReactNode, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const DraggableItems: FC<{ children: ReactNode }> = ({ children }) => {
  // We will use React useRef hook to reference the wrapping div:
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="select-none flex gap-6 overflow-hidden my-3"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
      {children}
    </div>
  );
};

export default DraggableItems;
