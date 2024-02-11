import DarkmodeToggle from "./DarkmodeToggle";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              이미지
              <span className="ml-3 text-xl">정준혁 포트폴리오</span>
            </div>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <DropDown />
          </nav>
          <DarkmodeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
