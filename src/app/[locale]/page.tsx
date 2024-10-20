import Timeline from "@/components/Timeline/Timeline";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="min-h-screen flex flex-col items-center gap-8">
      <p className="text-base font-opensans">
        {t.rich("profesional_description", {
          strong: (children) => (
            <strong className="text-strong">{children}</strong>
          ),
        })}
      </p>
      <hr className="bg-gray-400 w-full" />
      <h4 className="text-xl font-base text-left w-full">
        {t("experience_title")}
      </h4>
      <Timeline />
      <hr className="bg-gray-400 w-full" />
      <h4 className="text-xl font-base text-left w-full">Proyectos</h4>
      <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-2 lg:gap-8">
        <div className="h-32 rounded-lg border border-gray-400"></div>
        <div className="h-32 rounded-lg border border-gray-400"></div>
        <div className="h-32 rounded-lg border border-gray-400"></div>
        <div className="h-32 rounded-lg border border-gray-400"></div>
      </div>
    </main>
  );
}
