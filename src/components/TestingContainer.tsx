function TestingContainer() {
  return (
    <>
      <div className="flex flex-col justify-start px-64 mb-6">
        <h2 className="pb-2 text-neutral-500 font-medium">Testing</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://vercel.com/dashboard">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Vercel
            </p>
          </a>
          <a target="_blank" href="https://runjs.app/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              RunJS
            </p>
          </a>
          <a target="_blank" href="https://codepen.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              CodePen
            </p>
          </a>
          <a target="_blank" href="https://markdownlivepreview.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Markdown Live Preview
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default TestingContainer;
