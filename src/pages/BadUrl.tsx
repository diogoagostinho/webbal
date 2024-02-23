import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

function BadUrl() {
  useEffect(() => {
    document.title = "Webbal - 404";
  });
  return (
    <>
      <div className="w-full h-80 flex flex-col text-center items-center justify-center">
        <h1 className="text-5xl font-semibold dark:text-slate-100">404</h1>
        <p className="text-lg py-2 dark:text-slate-100">
          This page doesn't exist
        </p>
        <Link to="/">
          <button className="mt-3 bg-emerald-400 hover:bg-emerald-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-neutral-50 dark:text-neutral-100 font-normal p-3 w-32 text-sm rounded font-options inline-flex justify-center shadow-md">
            Go back
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default BadUrl;
