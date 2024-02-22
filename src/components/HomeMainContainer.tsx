import items from "../assets/items.json";

function HomeMainContainer(props: { catId: number; catName: string }) {
  items.sort(function (a, b) {
    if (a.itemName < b.itemName) {
      return -1;
    }
    if (a.itemName > b.itemName) {
      return 1;
    }
    return 0;
  });
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">{props.catName}</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
          {items.map((item: any) => (
            <div className={item.itemCat == props.catId ? "" : "hidden"}>
              <a target="_blank" href={item.itemLink}>
                <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
                  {item.itemName}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeMainContainer;
