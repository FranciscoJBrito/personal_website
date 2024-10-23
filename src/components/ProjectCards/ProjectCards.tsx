import { ProjectCardI } from "@/interfaces/projects";
import Image from "next/image";

const ProjectCards = ({
  image,
  title,
  description,
  type_of_participation,
  link,
}: ProjectCardI) => {
  return (
    <a className="flex flex-col items-start justify-start rounded-lg border p-4 gap-3 cursor-pointer hover:bg-border transition ease-in-out duration-500" href={link} target="blank">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 justify-start items-center">
          <Image
            src={image}
            alt="Nodeverses"
            width={25}
            height={25}
            className="rounded-sm"
          />
          <p className="text-base font-semibold">{title}</p>
        </div>
        <span className="text-xs italic text-power">{type_of_participation}</span>
      </div>
      <p className="text-sm">{description}</p>
    </a>
  );
};

export default ProjectCards;
