import { useOutletContext } from "react-router-dom";
const Loader = () => {
  const [theme] = useOutletContext();

  return (
    <span
      class="material-symbols-outlined loader"
      id={theme}
      style={{  background: theme === "dark" && "transparent" }}
    >
      progress_activity
    </span>
  );
};

export default Loader;
