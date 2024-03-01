import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import categories from "../assets/categories.json";
import HomeMainContainer from "../components/HomeMainContainer";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Webbal";
  });

  const navigate = useNavigate();
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    if (search === "" || search === undefined) {
      console.log("search undefined");
    } else {
      if (e.key === "Enter") {
        navigate("/search/" + search);
      }
    }
  };
  const handleSearchInputButton = () => {
    if (search === "" || search === undefined) {
      console.log("search undefined");
    } else {
      navigate("/search/" + search);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center text-center pb-4 gap-4">
        <h1 className="text-5xl font-semibold text-green-400 dark:text-blue-700">
          Webbal
        </h1>
        <p className="text-sm text-neutral-500 font-medium">
          A web dev's portal made by{" "}
          <a
            target="_blank"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
            href="https://github.com/diogoagostinho/"
          >
            Diogo Agostinho
          </a>
        </p>
      </div>

      <form className="max-w-md mx-auto mb-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={handleSearch}
            onKeyDown={handleSearchInput}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search anything..."
            required
          />
          <button
            type="submit"
            onClick={handleSearchInputButton}
            className="text-white absolute end-2.5 bottom-2.5 bg-emerald-400 hover:bg-emerald-500 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex gap-2 justify-center  flex-wrap px-40 mb-10">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {categories.map((cat: any) => (
          <Button key={cat.catId} text={cat.catName} />
        ))}
      </div>

      <div className="flex flex-col gap-4 flex-wrap justify-center px-40 mb-6">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {categories.map((cat: any) => (
          <HomeMainContainer
            key={cat.catId}
            catId={cat.catId}
            catName={cat.catName}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;
