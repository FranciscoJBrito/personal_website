import ModeToggle from "../ModeToggle/ModeToggle";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-8">
      <p>Francisco Brito</p>
      <div className="relative flex items-center gap-2">
        <ModeToggle />
        {/* <div className="h-9 w-9 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer"> */}
        <Dropdown />
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
