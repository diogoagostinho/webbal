import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import items from "../assets/items.json";
import Footer from "../components/Footer";

function Search() {
  useEffect(() => {
    document.title = `Webbal - ${search}`;
  });

  const location = useLocation();
  const search = location.pathname.split("/")[2].toString();
  const normalizedSearch = search.toLowerCase();

  return (
    <>
      <div className="py-8 pl-20">
        <div className="flex">
          <h1 className="pr-4 text-4xl pb-1 font-semibold text-slate-900 dark:text-slate-100">
            Results for:{" "}
          </h1>{" "}
          <h1 className="text-4xl pb-1 font-medium text-green-400 dark:text-blue-700">
            {search}
          </h1>
        </div>

        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
        {items.map((item: any) => {
          const normalizedItem = item.itemName.toLowerCase();

          if (normalizedItem.includes(normalizedSearch)) {
            return (
              <div key={item.id} className="py-2">
                <a target="_blank" href={item.itemLink}>
                  <p className="text-sm font-semibold text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
                    {item.itemName}
                  </p>
                </a>
                <p className="text-xs font-display font-normal text-neutral-500">
                  {item.itemDesc}
                </p>
              </div>
            );
          }
        })}
      </div>
      <Footer />
    </>
  );
}

export default Search;
