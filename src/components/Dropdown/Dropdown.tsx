"use client";
import { LanguageIcon } from "@/assets/icons";
import { useLocale } from "next-intl";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const localActive = useLocale();
  const router = useRouter();

  const isSelected = () => {
      return localActive === "es" ? true : false;
  }

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLocaleChange = (locale: string) => {
    const nextLocale = locale;
      router.replace(`/${nextLocale}`);
  };

  return (
    <div className="relative">
      <div
        className={`${
          isOpen ? "bg-black/10 dark:bg-gray-100/10" : "bg-transparent"
        } inline-flex items-center overflow-hidden rounded-md p-2 gap-1 hover:bg-black/10 dark:hover:bg-gray-100/10 cursor-pointer`}
        onClick={handleOpen}
      >
        <div className="h-5 w-5">
          <LanguageIcon />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } end-0 z-10 mt-2 w-24 rounded-md shadow-md border  dark:border-border bg-background dark:bg-background shadow-lg"
        role="menu`}
      >
        <div 
          className="flex flex-col justify-center items-start p-1 gap-1" 
          defaultValue={localActive}
        >
         <button className={`${isSelected() && "bg-black/10 dark:bg-gray-100/10"} w-full p-2 rounded-sm hover:bg-black/10 dark:hover:bg-gray-100/10 text-sm`} onClick={() => handleLocaleChange("es")}>Español</button>   
         <button className={`${!isSelected() && "bg-black/10 dark:bg-gray-100/10"} w-full p-2 rounded-sm hover:bg-black/10 dark:hover:bg-gray-100/10 text-sm`} onClick={() => handleLocaleChange("en") }>English</button>   
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
