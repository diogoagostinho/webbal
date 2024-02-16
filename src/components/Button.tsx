function Button(props: { text: string }) {
  return (
    <>
      <button className="dark:text-slate-100 text-slate-900 dark:bg-blue-500 hover:dark:bg-blue-600 bg-green-400 hover:bg-green-500 font-normal py-5 px-4 w-48 text-sm rounded font-options inline-flex justify-start shadow-md">
        {props.text}
      </button>
    </>
  );
}

export default Button;
