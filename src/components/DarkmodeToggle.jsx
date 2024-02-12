import { useTheme } from "next-themes";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className={`inline-flex items-center border-0 py-2 px-3 text-slate-500 focus:outline-none hover:text-black rounded-md text-base mt-4 md:mt-0 transition duration-300 ${
          theme === "dark"
            ? "dark:text-slate-400 dark:hover:text-white"
            : "dark:text-slate-600"
        }`}
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IoMoon /> : <IoSunnySharp />}
      </button>
    </>
  );
};

export default DarkmodeToggle;
