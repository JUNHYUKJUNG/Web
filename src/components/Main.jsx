import React, { useState } from "react";
import { Link } from "react-router-dom";
import YellowFolder from "../svg/YellowFolder";
import GreenFolder from "../svg/GreenFolder";
import BlueFolder from "../svg/BlueFolder";
import Draggable from "react-draggable";

const Main = () => {
  const [aboutMe, setAboutMe] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font main-content">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="container">
          <Draggable>
            <div className="item item-a cursor-move">JUNHYUK JUNG</div>
          </Draggable>
          {/* aboutMe */}
          <Draggable>
            <div className="item folder-aboutMe">
              <button
                className="text-lg cursor-help"
                onClick={() => setAboutMe(!aboutMe)}
              >
                <YellowFolder />
                <div className="ml-2">AboutMe</div>
              </button>
              {aboutMe && (
                <ul className="text-center bg-white submenu speech-bubble p-4">
                  <li>
                    <Link to="/">JUNHYUK JUNG</Link>
                  </li>
                  <li>
                    <Link to="/">?</Link>
                  </li>
                  <li>
                    <Link to="/">?</Link>
                  </li>
                </ul>
              )}
            </div>
          </Draggable>
          {/* aboutMe */}
          {/* contact */}
          <Draggable>
            <div className="item folder-contact">
              <button
                className="text-lg cursor-alias"
                onClick={() => setContact(!contact)}
              >
                <BlueFolder />
                <div className="ml-2">Contact</div>
              </button>
              {contact && (
                <ul className="text-left bg-white submenu speech-bubble p-4">
                  <li>
                    <Link to="/Contact">Directly</Link>
                  </li>
                  <li>
                    <Link to="/">E-mail</Link>
                  </li>
                  <li>
                    <Link to="/">?</Link>
                  </li>
                </ul>
              )}
            </div>
          </Draggable>
          {/* contact */}
          {/* project */}
          <Draggable>
            <div className="item folder-project">
              <button
                className="text-lg cursor-zoom-in"
                onClick={() => setProject(!project)}
              >
                <GreenFolder />
                <div className="ml-2">Project</div>
              </button>
              {project && (
                <ul className="text-center bg-white submenu speech-bubble p-4">
                  <li>
                    <Link to="/">?</Link>
                  </li>
                  <li>
                    <Link to="/">?</Link>
                  </li>
                  <li>
                    <Link to="/">?</Link>
                  </li>
                </ul>
              )}
            </div>
          </Draggable>
          {/* project */}
        </div>
      </div>
    </section>
  );
};

export default Main;
