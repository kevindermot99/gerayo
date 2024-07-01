import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyTicket from "./Pages/BuyTicket";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Track from "./Pages/Track";
import Search from "./Pages/Search";

function App() {
  const [visited, setVisited] = useState(false);
  const [guestEmail, setGuestEmail] = useState();

  useEffect(() => {
    const visitedAs = localStorage.getItem("visitedAs");
    const storedGuestEmail = localStorage.getItem("guestEmailCode");
    if (visitedAs) {
      setVisited(true);
    }
    if (storedGuestEmail) {
      setGuestEmail(storedGuestEmail)
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Track guestEmail={guestEmail} />} />
          <Route path="/ticket" element={<BuyTicket guestEmail={guestEmail} />} />
          <Route path="/search" element={<Search guestEmail={guestEmail} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/*" element={<PageError />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
