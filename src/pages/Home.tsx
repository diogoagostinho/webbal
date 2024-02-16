import { useEffect } from "react";
import Button from "../components/Button";

function Home() {
  useEffect(() => {
    document.title = "Webbal";
  });
  return (
    <>
      <div className="flex flex-col justify-center text-center pb-12 gap-4">
        <h1 className="text-5xl font-semibold text-green-400 dark:text-blue-700">
          Webbal
        </h1>
        <p className="text-sm text-neutral-500 font-medium">
          A web dev's portal made by{" "}
          <a
            target="_blank"
            className="hover:text-neutral-900 hover:dark:text-neutral-100"
            href="https://github.com/diogoagostinho/"
          >
            Diogo Agostinho
          </a>
        </p>
      </div>

      <div className="">
        <input type="text" placeholder="Search anything..." />
      </div>

      <div className="flex gap-2 justify-center flex-wrap ">
        <Button text="tools" />
        <Button text="documentation" />
        <Button text="testing" />
        <Button text="tools" />
        <Button text="documentation" />
        <Button text="testing" />
        <Button text="tools" />
        <Button text="documentation" />
        <Button text="testing" />
        <Button text="tools" />
        <Button text="documentation" />
        <Button text="testing" />
      </div>
    </>
  );
}

export default Home;
