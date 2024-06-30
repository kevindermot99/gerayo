import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyTicket from "./Pages/BuyTicket";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Track from "./Pages/Track";
import Profile from "./Pages/Profile";

function App() {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    const visitedAs = localStorage.getItem("visitedAs");
    if (visitedAs) {
      setVisited(true);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Track />} />
          <Route path="/ticket" element={<BuyTicket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
