import { useEffect } from "react";

function Testing() {
  useEffect(() => {
    document.title = "Webbal - Testing";
  });
  return (
    <>
      <h1>Testing</h1>
    </>
  );
}

export default Testing;
