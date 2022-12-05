import React, { FC } from "react";
import { TSectionHeader } from "./types";

const SectionHeader: FC<TSectionHeader> = ({ icon, title }) => {
  return (
    <div className="flex gap-2 items-center justify-start">
      {icon}
      {<h2>{title}</h2>}
    </div>
  );
};

export default SectionHeader;
