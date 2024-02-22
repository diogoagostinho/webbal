import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CategoryPage() {
  useEffect(() => {
    document.title = "Webbal - Tools";
  });
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h1>teste</h1>
    </>
  );
}

export default CategoryPage;
