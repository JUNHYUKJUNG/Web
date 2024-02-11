import React, { useState } from "react";
import { Link } from "react-router-dom";
import YellowFolder from "../svg/YellowFolder";
import GreenFolder from "../svg/GreenFolder";
import BlueFolder from "../svg/BlueFolder";

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
              <YellowFolder />
            </button>
            {aboutMe && (
              <ul className="text-center bg-white submenu speech-bubble p-4">
                <li>
                  <Link to="/">?</Link>
                </li>
              </ul>
            )}
          </div>
          {/* aboutMe */}
          {/* contact */}
          <div className="item folder-contact">
            <button onClick={() => setContact(!contact)}>
              <BlueFolder />
            </button>
            {contact && (
              <ul className="text-center bg-white submenu speech-bubble p-4">
                <li>
                  <Link to="/Contact">?</Link>
                </li>
              </ul>
            )}
          </div>
          {/* contact */}
          {/* project */}
          <div className="item folder-project">
            <button onClick={() => setProject(!project)}>
              <GreenFolder />
            </button>
            {project && (
              <ul className="text-center bg-white submenu speech-bubble p-4">
                <li>
                  <Link to="/">?</Link>
                </li>
              </ul>
            )}
          </div>
          {/* project */}
        </div>
      </div>
    </section>
  );
};

export default Main;
