import React from "react";
import { Route, Routes } from "react-router";
import Header from "./overall/Header/Header";
import HomePage from "./pages/HomePage/components/HomePage";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>
    </div>
  );
}

export default App;
