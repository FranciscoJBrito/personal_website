"use client";
import { ChevronDownIcon, LanguageIcon } from "@/assets/icons";
import { useLocale } from "next-intl";
import { useCallback, useState } from "react";
import { locales } from "@/i18n";
import { useRouter } from 'next/navigation';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();

  const handleOpen = () => {
    console.log("isOpen", isOpen);
    setIsOpen(!isOpen);
  };

  const handleLocaleChange = useCallback(
    (newLocale: string) => {
      handleOpen();
      console.log("vamos a ver si esto se actualiza");
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.push("/en");
    },
    [router]
  );

  return (
    <div className="relative">
      <div
        className={`${
          isOpen ? "bg-gray-200 dark:bg-gray-100/10" : "bg-transparent"
        } inline-flex items-center overflow-hidden rounded-md p-2 gap-1 hover:bg-gray-200 dark:hover:bg-gray-100/10 cursor-pointer`}
        onClick={handleOpen}
      >
        <div className="h-5 w-5">
          <LanguageIcon />
        </div>
        <button className="h-full">
          <span className="sr-only">Menu</span>
          <ChevronDownIcon />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
        role="menu`}
      >
        <div className="p-2">
          {locales.map((cur) => (
            <button
              key={cur}
              className="block w-full text-left"
              onClick={() => handleLocaleChange(cur)}
            >
              {cur === locale ? `${cur} (current)` : cur}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
