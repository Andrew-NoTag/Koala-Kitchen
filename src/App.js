import React from "react";
import NavBar from "./components/NavBar.js";
import Homepage from "./components/Homepage.js";
import Footer from "./components/Footer.js";
import MenuPage from "./components/MenuPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* NavBar at top of the page */}
        <NavBar />


        {/* Routes to different contents */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>

        {/* Footer at bottom of the page */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
