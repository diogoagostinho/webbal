function LearningContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">Learning</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://www.freecodecamp.org/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              FreeCodeCamp
            </p>
          </a>
          <a target="_blank" href="https://www.codecademy.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Codecademy
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default LearningContainer;
