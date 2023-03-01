import React from "react";
import { Route, Routes } from "react-router";
import Header from "./overall/Header/Header";
import PopupMenu from "./overall/PopupMenu/PopupMenu";
import HomePage from "./pages/HomePage/components/HomePage";
import "./styles/index.scss";

function App() {
  return (
    <div>
      {/* <PopupMenu /> */}
      <div className="globalConteiner">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
