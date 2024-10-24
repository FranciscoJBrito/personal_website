import ProjectCards from "@/components/ProjectCards/ProjectCards";
import Timeline from "@/components/Timeline/Timeline";
import { useTranslations } from "next-intl";
import nodeversesImage from "@/assets/images/nodeverses.png";
import startsImage from "@/assets/images/stars.png";
import namviekImage from "@/assets/images/namviek.png";
import summeImage from "@/assets/images/summe.png";
import BlogPostsCard from "@/components/BlogPosts/BlogPostsCard";
import { ArrowUpRightIcon } from "@/assets/icons";

export default function Home() {
  const t = useTranslations("IndexPage");

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center gap-8 pt-20">
      <p className="text-base leading-7">
        {t.rich("profesional_description", {
          strong: (children) => (
            <strong className="text-strong">{children}</strong>
          ),
        })}
      </p>
      <div className="flex w-full justify-start items-center gap-1">
        <a
          className="flex items-center text-sm font-semibold text-power border-b border-power"
          href={t("buttons.download_cv.link")}
          target="blank"
        >
          {t("buttons.download_cv.text")}
          <ArrowUpRightIcon />
        </a>
      </div>
      <hr className="w-full" />
      <h4 className="text-xl text-left w-full text-strong font-semibold">
        {t("experience_title")}
      </h4>
      <Timeline />
      {/* <hr className="bg-gray-400 w-full" /> */}
      <h4 className="text-xl text-left w-full text-strong font-semibold">
        {t("projects_title")}
      </h4>
      <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-2">
        <ProjectCards
          image={nodeversesImage.src}
          title={t("projects.nodeverses.title")}
          description={t("projects.nodeverses.description")}
          type_of_participation={t("projects.nodeverses.type_of_participation")}
          link={t("projects.nodeverses.link")}
        />
        <ProjectCards
          image={startsImage.src}
          title={t("projects.whatMLmodel.title")}
          description={t("projects.whatMLmodel.description")}
          type_of_participation={t(
            "projects.whatMLmodel.type_of_participation"
          )}
          link={t("projects.whatMLmodel.link")}
        />
        <ProjectCards
          image={namviekImage.src}
          title={t("projects.namviek.title")}
          description={t("projects.namviek.description")}
          type_of_participation={t("projects.namviek.type_of_participation")}
          link={t("projects.namviek.link")}
        />
        <ProjectCards
          image={summeImage.src}
          title={t("projects.summe.title")}
          description={t("projects.summe.description")}
          type_of_participation={t("projects.summe.type_of_participation")}
          link={t("projects.summe.link")}
        />
      </div>
      {/* <hr className="bg-gray-400 w-full mt-4" /> */}
      <h4 className="text-xl font-base text-left w-full text-strong font-semibold">
        Posts
      </h4>
      <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-2">
        <BlogPostsCard
          title={t("posts.first.title")}
          subtitle={t("posts.first.subtitle")}
          link={t("posts.first.link")}
        />
        <BlogPostsCard
          title={t("posts.second.title")}
          subtitle={t("posts.second.subtitle")}
          link={t("posts.second.link")}
        />
      </div>
      <hr className="bg-gray-400 w-full mt-16" />
      <footer className="mb-6">
        <p className="text-sm font-opensans italic">{t("footer.text")}</p>
      </footer>
    </main>
  );
}
