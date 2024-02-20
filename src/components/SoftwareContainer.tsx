function SoftwareContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">Software</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://insomnia.rest/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Insomnia
            </p>
          </a>
          <a target="_blank" href="https://www.postman.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Postman
            </p>
          </a>
          <a target="_blank" href="https://fontba.se/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Fontbase
            </p>
          </a>
          <a target="_blank" href="https://dbeaver.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              DBeaver
            </p>
          </a>
          <a target="_blank" href="https://www.figma.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Figma
            </p>
          </a>
          <a target="_blank" href="https://tabby.sh/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Tabby
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default SoftwareContainer;
