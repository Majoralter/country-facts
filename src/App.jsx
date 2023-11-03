import "./Sass/main.scss";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Layout";
import Home from "./components/Home";
import Country from "./components/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/countries/:id" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default App;
