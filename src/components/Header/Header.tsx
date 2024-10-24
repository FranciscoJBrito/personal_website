import ModeToggle from "../ModeToggle/ModeToggle";
import Dropdown from "../Dropdown/Dropdown";
import { GitHubIcon, LinkedInIcon } from "@/assets/icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed max-w-4xl w-full mx-auto h-16 bg-background/80 backdrop-blur-[8px] z-20 px-4 sm:px-6 lg:px-8">
      <h4 className="text-strong font-semibold text-lg">Francisco Brito</h4>
      <div className="relative flex items-center gap-1">
        <a className="h-9 w-9 p-2 rounded-md hover:bg-black/10 dark:hover:bg-gray-100/10" href="https://www.linkedin.com/in/francisco-javier-brito-b4657420a/" target="blank">
          <LinkedInIcon />
        </a>
        <a className="h-9 w-9 p-2 rounded-md hover:bg-black/10 dark:hover:bg-gray-100/10" href="https://github.com/FranciscoJBrito" target="blank">
          <GitHubIcon />
        </a>
        <ModeToggle />
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
