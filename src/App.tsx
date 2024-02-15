import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Documentation from "./pages/Documentation";
import Fonts from "./pages/Fonts";
import Design from "./pages/Design";
import Hosting from "./pages/Hosting";
import Testing from "./pages/Testing";
import Stacks from "./pages/Stacks";
import Learning from "./pages/Learning";
import BadUrl from "./pages/BadUrl";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="dark">
        <BrowserRouter>
          <div className="bg-gray-100 dark:bg-slate-900 font-display">
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
              <Route path="tools" element={<Tools />} />
              <Route path="documentation" element={<Documentation />} />
              <Route path="fonts" element={<Fonts />} />
              <Route path="design" element={<Design />} />
              <Route path="hosting" element={<Hosting />} />
              <Route path="testing" element={<Testing />} />
              <Route path="stacks" element={<Stacks />} />
              <Route path="learning" element={<Learning />} />
              <Route path="*" element={<BadUrl />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
