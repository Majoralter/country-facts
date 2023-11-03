import { Link, useOutletContext } from "react-router-dom";

const NotFound = () => {
  const [theme] = useOutletContext();

  return (
    <div className="error__wrapper" id={theme}>
      <h1 >404 page not found :(</h1>
      <Link
        to="/"
        id={theme}
        style={{ padding: "12px 24px", borderRadius: "var(--radius-2)", boxShadow: "0 0 1em var(--gray-7)" }}
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
