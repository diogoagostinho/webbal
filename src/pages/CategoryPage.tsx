import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import subcategories from "../assets/subcategories.json";
import items from "../assets/items.json";
import categories from "../assets/categories.json";
import Footer from "../components/Footer";
import BadUrl from "./BadUrl";

function CategoryPage() {
  const location = useLocation().pathname.split("/")[1];
  const locationText = location[0].toUpperCase() + location.substring(1);
  const postRef = useRef(0);

  let catLocator = 0;

  categories.map((cat: any) => {
    for (let i = 0; i < categories.length; i++) {
      if (cat.catName == location) {
        catLocator = cat.catId;
        postRef.current = 1;
      }
    }
  });

  useEffect(() => {
    document.title = `Webbal / ${locationText}`;
  });

  if (postRef.current == 0) {
    return (
      <>
        <BadUrl />
      </>
    );
  }

  if (postRef.current == 1) {
    return (
      <>
        <div className="py-8 pl-20">
          <h1 className="text-4xl pb-1 font-medium text-green-400 dark:text-blue-700">
            {locationText}
          </h1>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {categories.map((cats: any) => (
            <p
              key={cats.catId}
              className={
                cats.catId == catLocator
                  ? "text-slate-900 font-bold text-md dark:text-slate-100 mb-5"
                  : "hidden"
              }
            >
              {cats.catDesc}
            </p>
          ))}
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {subcategories.map((subcats: any) => (
            <div
              key={subcats.subcatId}
              className={subcats.ascatId == catLocator ? "pb-6" : "hidden"}
            >
              <h2 className="pb-2 text-lg font-semibold text-neutral-500">
                {subcats.subcatName}
              </h2>
              <hr className="bg-neutral-900 dark:opacity-15 w-full" />
              <div className="flex flex-col mt-2 font-options gap-x-10 gap-y-2 ">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                {items.map((item: any) => (
                  <div
                    key={item.itemId}
                    className={
                      item.itemSubcat == subcats.subcatId ? "" : "hidden"
                    }
                  >
                    <a target="_blank" href={item.itemLink}>
                      <p className="text-sm font-semibold text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
                        {item.itemName}
                      </p>
                    </a>
                    <p className="text-xs font-display font-normal text-neutral-500">
                      {item.itemDesc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default CategoryPage;
