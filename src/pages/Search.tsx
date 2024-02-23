import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import items from "../assets/items.json";

function Search() {
  useEffect(() => {
    document.title = `Webbal - ${search}`;
  });

  const location = useLocation();
  const search = location.pathname.split("/")[2].toString();

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
        {items.map((item: any) => (
          <p key={item.itemId} className={item.itemName ? "" : "hidden"}>
            {item.itemName}
          </p>
        ))}
      </div>
    </>
  );
}

export default Search;
