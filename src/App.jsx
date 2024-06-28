import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";

function App() {
  const [visited, setVisited] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {visited ? (
            <>
              <Route path="/" element={<Home />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Welcome />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
