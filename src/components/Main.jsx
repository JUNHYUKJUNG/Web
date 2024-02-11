import React, { useState } from "react";
import { Link } from "react-router-dom";
import FolderClose from "../images/FolderClose.png";

const Main = () => {
  const [aboutMe, setAboutMe] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font main-content">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="container">
          <div className="item item-a">A</div>
          {/* aboutMe */}
          <div className="item folder-aboutMe">
            <button onClick={() => setAboutMe(!aboutMe)}>
              <img src={FolderClose} alt="FolderClose" className="w-20" />
            </button>
            {aboutMe && (
              <ul className="text-center bg-white submenu speech-bubble p-4">
                <li>
                  <Link to="/IntroduceDaoMarket">?</Link>
                </li>
              </ul>
            )}
          </div>
          {/* aboutMe */}
          <div className="item item-c">
            <img src={FolderClose} alt="FolderClose" className="w-20" />
          </div>
          <div className="item item-d">
            <img src={FolderClose} alt="FolderClose" className="w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
