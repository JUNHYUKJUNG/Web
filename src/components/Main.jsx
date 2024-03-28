import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlackFolder from "../images/BlackFolder.png";
import GrayFolder from "../images/GrayFolder.png";
import YellowFolder from "../images/YellowFolder.png";
import CD from "../images/CD.png";
import Draggable from "react-draggable";

const Main = () => {
  const [isClickedAboutMe, setIsClickedAboutMe] = useState(false);
  const [isClickedProject, setIsClickedProject] = useState(false);
  const [isClickedContact, setIsClickedContact] = useState(false);
  const [aboutMe, setAboutMe] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font main-content">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center S-Core">
        <div className="container">
          <Draggable>
            <div className="item CD cursor-move">
              <img
                src={CD}
                alt="CD"
                draggable="false"
                className="w-[350px] h-[350px]"
              />
            </div>
          </Draggable>
          {/* aboutMe */}
          <Draggable>
            <div className="item folder-aboutMe">
              <button
                className={`text-lg cursor-help px-4 py-1 border-4 ${
                  isClickedAboutMe
                    ? "bg-gray-300 border-gray-200"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setAboutMe(!aboutMe);
                  setIsClickedAboutMe(!isClickedAboutMe);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${YellowFolder})`,
                    backgroundSize: "cover",
                    width: "65px",
                    height: "65px",
                  }}
                  alt="YellowFolder"
                />
                <div>Untitled</div>
              </button>
              {aboutMe && (
                <ul className="text-center bg-white text-3xl submenu speech-bubble p-4">
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
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
                className={`text-lg cursor-alias px-4 py-1 border-4 ${
                  isClickedContact
                    ? "bg-gray-300 border-gray-200"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setContact(!contact);
                  setIsClickedContact(!isClickedContact);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${BlackFolder})`,
                    backgroundSize: "cover",
                    width: "65px",
                    height: "65px",
                  }}
                  alt="BlackFolder"
                />
                <div>Untitled</div>
              </button>
              {contact && (
                <ul className="text-center bg-white text-3xl submenu speech-bubble p-4">
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
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
                className={`text-lg cursor-zoom-in px-4 py-1 border-4 ${
                  isClickedProject
                    ? "bg-gray-300 border-gray-200"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setProject(!project);
                  setIsClickedProject(!isClickedProject);
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${GrayFolder})`,
                    backgroundSize: "cover",
                    width: "65px",
                    height: "65px",
                  }}
                  alt="GrayFolder"
                />
                <div>Untitled</div>
              </button>
              {project && (
                <ul className="text-center bg-white text-3xl submenu speech-bubble p-4">
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
                  </li>
                  <li>
                    <Link to="/">Untitled</Link>
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
