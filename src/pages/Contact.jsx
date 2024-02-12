import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Telegram
  const sendMsg = async () => {
    try {
      await axios({
        method: "post",
        url: "https://api.telegram.org/{api}/sendMessage",
        data: {
          chat_id: "-{id}",
          text: msg,
        },
      });
      setShowPopup(true);
    } catch (error) {
      console.error("Send Again :", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-darkMode">
      <Layout>
        {/* 텔레그램 api */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <div className="text-5xl font-medium title-font mb-4 text-gray-900 dark:text-white">
                Direct Message
              </div>
              <div className="lg:w-2/3 mx-auto leading-relaxed text-xl font-semi-bold">
                아래 박스에 입력하신 후 제출 버튼을 눌러주세요.
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-10 text-lg text-gray-600"
                >
                  양식에 맞게 입력해주세요.
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="성함 : &#13;&#10;연락 받으실 이메일 또는 연락처 : &#13;&#10;하실 말씀 :"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-80 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={sendMsg}
                className="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
              >
                제출
              </button>
            </div>
            {/* 온라인 상담 성공 팝업 */}
            {showPopup && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3
                            className="text-lg leading-6 font-medium text-gray-900"
                            id="modal-title"
                          >
                            제출 완료
                          </h3>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              문의 주셔서 감사드립니다. 빠른 시일 내에 답변
                              드리겠습니다.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={closePopup}
                      >
                        확인
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* 온라인 상담 성공 팝업 */}
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Contact;
