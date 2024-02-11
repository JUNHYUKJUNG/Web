import FolderClose from "../images/FolderClose.png";

const Main = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font main-content">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="container">
          <div className="item item-a">A</div>
          <div className="item item-b">
            <img src={FolderClose} alt="FolderClose" className="w-20" />
          </div>
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
