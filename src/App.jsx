import "./Sass/main.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Layout";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
