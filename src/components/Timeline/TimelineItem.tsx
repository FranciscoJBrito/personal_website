import { TimeLineItemI } from "@/interfaces/timeline-item";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { MAX_LENGTH } from "@/utils/constantes";

const TimelineItem = (data: TimeLineItemI) => {
  const t = useTranslations("IndexPage.buttons");
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const isLongText = (data.description?.toString() || "").length > MAX_LENGTH;

  return (
    <div className="relative w-full">
      <div className="absolute top-1.5 z-10 -ml-1.5 rounded-full h-3 w-3 border border-current">
        <div className="p-1 m-auto mt-[1px] my-auto rounded-full h-2 w-2 bg-current" />
      </div>
      <div className="ml-6 -mt-2 mb-10">
        <div className="flex justify-between items-center mb-[2px]">
          <span className="text-md text-strong font-semibold">{data.title}</span>
          <span className="text-xs text-strong font-normal">{data.location}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-strong font-normal">{data.company}</span>
          <span className="text-xs text-strong font-normal">{data.date}</span>
        </div>
        <p className="mt-4 text-sm leading-5">
        {isExpanded || !isLongText ? data.description?.toString() : data.description?.toString().slice(0, MAX_LENGTH) + "..."}
          {isLongText && (
            <button
              onClick={toggleReadMore}
              className="ml-2 text-xs text-power hover:underline"
            >
              {isExpanded ? t("read_less") : t("read_more")}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;
