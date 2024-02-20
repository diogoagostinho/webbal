function HostingContainer() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="pb-2 text-neutral-500 font-medium">Hosting</h2>
        <hr className="bg-neutral-900 dark:opacity-15" />
        <div className="flex flex-col flex-wrap mt-2 font-options gap-x-10 gap-y-2 ">
          <a target="_blank" href="https://vercel.com/dashboard">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Vercel
            </p>
          </a>
          <a target="_blank" href="https://console.firebase.google.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Firebase
            </p>
          </a>
          <a target="_blank" href="https://app.netlify.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Netlify
            </p>
          </a>
          <a target="_blank" href="https://cloud.google.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Google Cloud
            </p>
          </a>
          <a target="_blank" href="https://www.000webhost.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              000webhost
            </p>
          </a>
          <a target="_blank" href="https://aws.amazon.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Amazon AWS
            </p>
          </a>
          <a target="_blank" href="https://cloudinary.com/">
            <p className="text-sm text-neutral-900 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-blue-500">
              Cloudinary
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
export default HostingContainer;
