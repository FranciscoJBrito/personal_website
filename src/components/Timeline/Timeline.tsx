"use client";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const t = useTranslations("IndexPage.experience");

  return (
    <div className="flex h-fit w-full justify-start">
      <div className="space-y-6 border-l">
        <TimelineItem
          company={t("beder.company")}
          location={t("beder.location")}
          title={t("beder.title")}
          date={t("beder.date")}
          description={t.rich("beder.description", {
            strong: (children) => (
              <strong className="text-strong">{children}</strong>
            ),
          })}
        />
        <TimelineItem
          company={t("trichter_second.company")}
          location={t("trichter_second.location")}
          title={t("trichter_second.title")}
          date={t("trichter_second.date")}
          description={t.rich("trichter_second.description", {
            strong: (children) => (
              <strong className="text-strong">{children}</strong>
            ),
          })}
        />
        <TimelineItem
          company={t("trichter_first.company")}
          location={t("trichter_first.location")}
          title={t("trichter_first.title")}
          date={t("trichter_first.date")}
          description={t.rich("trichter_first.description", {
            strong: (children) => (
              <strong className="text-strong">{children}</strong>
            ),
          })}
        />
        <TimelineItem
          company={t("freelance.company")}
          location={t("freelance.location")}
          title={t("freelance.title")}
          date={t("freelance.date")}
          description={t.rich("freelance.description", {
            strong: (children) => (
              <strong className="text-strong">{children}</strong>
            ),
          })}
        />
      </div>
    </div>
  );
};

export default Timeline;
