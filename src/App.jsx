import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome1 from "./Pages/Welcome1";
import Welcome2 from "./Pages/Welcome2";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Center from "./Pages/Center";

function App() {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const visitedAs = localStorage.getItem('visitedAs')
    if(visitedAs){
      setVisited(true)
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          {visited ? (
            <>
              <Route path="/" element={<Center />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Welcome1 />} />
              <Route path="/feature2" element={<Welcome2 />} />
            </>
          )}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
