import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import BadUrl from "./pages/BadUrl";
import { useEffect, useState } from "react";

function App() {
  const darkmodeCookie = Cookies.get("darkmode");
  const [isDark, setIsDark] = useState(
    darkmodeCookie === "dark" ? true : false
  );

  const [isHome, setIsHome] = useState(true);

  const sunSvg =
    "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z";
  const moonSvg =
    "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z";

  const handleDarkmode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    Cookies.set("darkmode", isDark ? "dark" : "");
    if (document.title === "Webbal") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  });

  const handleHome = () => {
    setIsHome(true);
  };

  return (
    <>
      <BrowserRouter>
        <div className={isDark ? "dark" : ""}>
          <div className="bg-neutral-100 dark:bg-neutral-900 font-display">
            <div
              id="navbar"
              className="flex justify-between align-middle px-6 py-6"
            >
              <div
                onClick={handleHome}
                className={isHome ? "opacity-0" : "opacity-100"}
              >
                <Link
                  className={isHome ? "cursor-default" : "cursor-pointer"}
                  to={isHome ? "/" : ""}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-12 h-12 p-2 bg-transparent hover:bg-green-400 hover:dark:bg-blue-600 rounded-md text-slate-900 dark:text-slate-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex gap-5 justify-items-center content-center align-middle">
                <div className="flex flex-wrap justify-items-center gap-2 content-center align-middle">
                  <Link target="_blank" to="https://github.com/diogoagostinho/">
                    <div className="dark:hover:bg-blue-600 hover:bg-green-400 p-2 rounded-md">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isDark ? "white" : ""}
                        className="w-6 h-6"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
                  >
                    <div className="dark:hover:bg-blue-600 hover:bg-green-400 p-2 rounded-md">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isDark ? "white" : ""}
                        className="w-6 h-6"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </Link>

                  <Link target="_blank" to="https://twitter.com/agostinho_dev">
                    <div className="dark:hover:bg-blue-600 hover:bg-green-400 p-2 rounded-md">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill={isDark ? "white" : ""}
                        className="w-6 h-6"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <button
                  onClick={handleDarkmode}
                  className="dark:hover:bg-blue-600 hover:bg-green-400 p-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke={isDark ? "white" : "black"}
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={isDark ? sunSvg : moonSvg}
                    />
                  </svg>
                </button>
              </div>
            </div>

            <Routes>
              <Route index element={<Home />} />
              <Route path="/:category" element={<CategoryPage />} />
              <Route path="*" element={<BadUrl />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
