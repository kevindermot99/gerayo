import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome1 from "./Pages/Welcome1";
import Welcome2 from "./Pages/Welcome2";
import Login from "./Pages/Login";

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
              <Route path="/" element={<Welcome1 />} />
              <Route path="/feature2" element={<Welcome2 />} />
            </>
          )}
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
