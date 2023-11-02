import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
const Layout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <nav id={theme}>
        <Link to="/" id={theme} className="nav__link">
          Where in the world?
        </Link>

        <button className="nav__button" id={theme} onClick={toggleTheme}>
          <span class="material-symbols-outlined">{theme === "light" ? "dark_mode" : "light_mode"}</span>
          {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
      </nav>

      <Outlet context={[theme]} />
    </>
  );
};

export default Layout;
