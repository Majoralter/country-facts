import { useOutletContext } from "react-router-dom";
const Loader = () =>{
    const [theme] = useOutletContext()

    return <span class="material-symbols-outlined loader" id={theme}>progress_activity</span>;
}

export default Loader