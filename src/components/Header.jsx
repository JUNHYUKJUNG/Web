import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
import DarkmodeToggle from "./DarkmodeToggle";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
              decoding="async"
              width="30"
              height="30"
              class="mw-file-element"
              srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/400px-React-icon.svg.png 2x"
              data-file-width="512"
              data-file-height="456"
            />
            <span className="ml-3 text-xl">정준혁 포트폴리오</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 flex items-center">
              <FaHome className="mr-1" />
              Home
            </a>
            <a className="mr-5 hover:text-gray-900 flex items-center">
              <IoPersonSharp className="mr-1" />
              About Me
            </a>
            <a className="mr-5 hover:text-gray-900 flex items-center">
              <FaFileCode className="mr-1" />
              Project
            </a>
            <a className="mr-5 hover:text-gray-900 flex items-center">
              <TbMessageCircle2Filled className="mr-1" />
              Contact
            </a>
          </nav>
          <DarkmodeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
