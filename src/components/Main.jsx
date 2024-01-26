const Main = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-thin text-gray-900">
            안녕하세요.
            <br className="hidden lg:inline-block" />
            <b>개발</b>을 <b>공부</b>하는
            <br className="hidden lg:inline-block" />
            <b>정준혁</b> 입니다.
          </h1>
          <div className="text-lg text-gray-500">
            <p className="mb-8 leading-relaxed">
              JavaScript와 React, Solidity를 공부하고 있습니다.
              <br className="hidden lg:inline-block" />
              현재 관심사는 블록체인과 디파이, Web3 입니다.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Project
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
};

export default Main;
