import { BlogPostsCardI } from "@/interfaces/posts";
import Image from "next/image";
import mediumLogo from "@/assets/images/medium.webp";

const BlogPostsCard = ({ title, subtitle, link }: BlogPostsCardI) => {
  return (
    <div className="flex flex-col items-start justify-start rounded-lg border p-4 gap-3">
      <div className="flex gap-3 justify-start items-center">
        <Image
          src={mediumLogo}
          width={25}
          height={25}
          alt="medium logo"
          className="rounded-sm"
        />
        <a className="text-sm font-semibold hover:underline cursor-pointer" target="blank" href={link}>{title}</a>
      </div>
      <span className="text-sm italic">{subtitle}</span>
    </div>
  );
};

export default BlogPostsCard;
