import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-500 body-font px-5 py-3 text-center flex footer Orbit">
      <div className="mx-auto flex dark:text-slate-400">
        <a href="mailto:jung@junhy.uk" className="mr-4">
          email
        </a>
        /
        <a href="https://github.com/JUNHYUKJUNG" className="mx-4">
          github
        </a>
        /
        <a href="https://velog.io/@junhyukjung/posts" className="mx-4">
          blog
        </a>
        /<div className="mx-4">linkedin</div>/
        <div className="mx-4">instagram</div>/
        <div className="mx-4">twitter</div>
      </div>
    </footer>
  );
};

export default Footer;
