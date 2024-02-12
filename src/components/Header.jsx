import DarkmodeToggle from "./DarkmodeToggle";
import { Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font header">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <div className="md:mr-auto">
            <Link to="/">
              <div className="flex transition duration-300">
                <RiArrowLeftLine className="mt-1 mr-1" />
                Home
              </div>
            </Link>
          </div>
          <DarkmodeToggle />
        </div>
      </header>
    </>
  );
};

export default Header;
