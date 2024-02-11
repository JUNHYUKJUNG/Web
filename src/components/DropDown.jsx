import { TbMessageCircle2Filled } from "react-icons/tb";
import { FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";

const DropDown = () => {
  return (
    <ul className="flex">
      {/* About Me */}
      <li className="mainmenu">
        <Link
          to="/"
          className="mr-12 pl-6 hover:text-gray-900 flex items-center"
        >
          <IoPersonSharp className="mr-1" />
          &nbsp;About Me
        </Link>
        <ul className="text-center w-[120px] bg-white submenu speech-bubble p-4">
          <li>
            <Link to="/IntroduceDaoMarket">?</Link>
          </li>
          <li className="py-2">
            <Link to="/AboutUs">?</Link>
          </li>
          <li>
            <Link to="/?">?</Link>
          </li>
        </ul>
      </li>
      {/* Home */}
      {/* Project */}
      <li className="mainmenu">
        <Link
          to="/PundingPlaceList"
          className="mr-12 pl-6 hover:text-gray-900 flex items-center"
        >
          <FaFileCode className="mr-1" />
          &nbsp;Project
        </Link>
        <ul className="text-center w-[130px] bg-white submenu speech-bubble p-4">
          <li>
            <Link to="/PundingPlaceList">?</Link>
          </li>
          <li className="py-2">
            <Link to="/SaleNFT">?</Link>
          </li>
          <li>
            <Link>?</Link>
          </li>
        </ul>
      </li>
      {/* Project */}
      {/* Contact */}
      <li className=" mainmenu">
        <Link
          to="/Contact"
          className="mr-5 hover:text-gray-900 flex items-center pl-4"
        >
          <TbMessageCircle2Filled className="mr-1" />
          &nbsp;Contact
        </Link>
        <ul className="text-center w-[140px] bg-white submenu speech-bubble p-4">
          <li>
            <Link to="/FAQ">?</Link>
          </li>
          <li className="py-2">
            <Link to="/Contact">?</Link>
          </li>
          <li>
            <Link to="/MyContact">?</Link>
          </li>
          {/* Contact */}
        </ul>
      </li>
    </ul>
  );
};

export default DropDown;
