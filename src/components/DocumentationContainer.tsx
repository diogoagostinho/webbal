function DocumentationContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">Documentation</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://developer.mozilla.org/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              MDN Webdocs
            </p>
          </a>
          <a target="_blank" href="https://devhints.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              DEVHINTS
            </p>
          </a>
          <a
            target="_blank"
            href="https://education.github.com/git-cheat-sheet-education.pdf"
          >
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Git Sheet
            </p>
          </a>
          <a target="_blank" href="https://react.dev/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              React Docs
            </p>
          </a>
          <a target="_blank" href="https://nextjs.org/docs">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              NextJS Docs
            </p>
          </a>
          <a target="_blank" href="https://www.typescriptlang.org/docs/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              TypeScript Docs
            </p>
          </a>
          <a target="_blank" href="https://tailwindcss.com/docs/installation">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Tailwind CSS Docs
            </p>
          </a>
          <a target="_blank" href="https://bem-cheat-sheet.9elements.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              BEM Naming Cheatsheet
            </p>
          </a>
          <a target="_blank" href="https://cssreference.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              CSS Reference
            </p>
          </a>
          <a target="_blank" href="https://vitejs.dev/guide/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Vite Docs
            </p>
          </a>
          <a
            target="_blank"
            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          >
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              C# Docs
            </p>
          </a>
          <a target="_blank" href="https://devdocs.io/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              DevDocs
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default DocumentationContainer;
