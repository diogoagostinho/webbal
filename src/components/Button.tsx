import { Link } from "react-router-dom";

function Button(props: { text: string }) {
  return (
    <>
      <Link to={props.text}>
        <button
          className={`bg-emerald-400 hover:bg-emerald-500 dark:bg-blue-500 dark:hover:bg-blue-600 text-neutral-50 dark:text-neutral-100 font-normal py-5 px-4 w-48 text-sm rounded font-options inline-flex justify-center shadow-md`}
        >
          {props.text}
        </button>
      </Link>
    </>
  );
}

export default Button;
