import { TimeLineItemI } from "@/interfaces/timeline-item";
import React from "react";

const TimelineItem = (data: TimeLineItemI) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-1 z-10 -ml-1.5 rounded-full h-3 w-3 border border-current">
        <div className="p-1 m-auto mt-[1px] my-auto rounded-full h-2 w-2 bg-current" />
      </div>
      <div className="ml-6 -mt-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold">{data.company}</span>
          <span className="text-sm font-normal">{data.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal">{data.title}</span>
          <span className="text-sm font-normal">{data.date}</span>
        </div>
        <p className="mt-4 text-sm">{data.description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
