function FontsContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">Fonts</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://www.dafontfree.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              DaFont
            </p>
          </a>
          <a target="_blank" href="https://fonts.google.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Google Fonts
            </p>
          </a>
          <a target="_blank" href="https://www.wfonts.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              wFonts
            </p>
          </a>
          <a target="_blank" href="https://fontsss.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Fontsss
            </p>
          </a>
          <a target="_blank" href="https://www.fontshare.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Fontshare
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default FontsContainer;
