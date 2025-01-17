import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinkedIn, Twitter } from "@mui/icons-material";
const ProfilePage = () => {
  return _jsx("div", {
    className: "max-w-4xl mx-auto p-6 lg:h-screen h-full",
    children: _jsxs("div", {
      className:
        "bg-white dark:bg-[#484554] rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8",
      children: [
        _jsx("img", {
          src: "/assets/main.jpeg",
          alt: "Akemini Ndaobong",
          className: "w-40 h-40 rounded-full object-cover shadow-lg",
        }),
        _jsxs("div", {
          className: "text-center md:text-left space-y-4",
          children: [
            _jsx("h1", {
              className: "text-3xl font-semibold dark:text-white",
              children: "Akemini Ndaobong",
            }),
            _jsxs("p", {
              className: "text-gray-700 dark:text-gray-300",
              children: [
                _jsx("strong", { children: "Bio:" }),
                " I am a competent software developer who is driven by a passion for leveraging technology to solve problems. Skilled in Javascript, Typescript, ReactJs, NodeJs, ExpressJs, Agile Methodologies, HTML, Cascading Style Sheets (CSS), MongoDB, and Postgresql, I am confident in my ability to deliver innovative solutions that drive organizational success. I am unwaveringly committed to keeping up with the latest developments in technology and industry best practices, and I constantly hone my skill set to stay ahead of software development trends.",
              ],
            }),
            _jsxs("div", {
              className: "text-gray-500 dark:text-gray-300",
              children: [
                _jsxs("p", {
                  children: [
                    _jsx("strong", { children: "Address:" }),
                    " Nigeria",
                  ],
                }),
                _jsxs("a", {
                  href: "mailto:akemini.ndaobong@gmail.com",
                  children: [
                    _jsx("strong", { children: "Email:" }),
                    " akemini.ndaobong@gmail.com",
                  ],
                }),
                _jsxs("p", {
                  children: [
                    _jsx("strong", { children: "Phone:" }),
                    " +234 806 289 8015",
                  ],
                }),
              ],
            }),
            _jsxs("div", {
              className: "flex justify-center md:justify-start space-x-4 mt-4",
              children: [
                _jsx("a", {
                  href: "https://www.linkedin.com/in/akemini-ndaobong-008678229/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: _jsx(LinkedIn, {
                    className:
                      "text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400",
                  }),
                }),
                _jsx("a", {
                  href: "https://x.com/TechAkem",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: _jsx(Twitter, {
                    className:
                      "text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};
export default ProfilePage;
