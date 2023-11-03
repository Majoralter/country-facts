import { useParams } from "react-router-dom"

const Country = () =>{
    const { id } = useParams()

    return <h1>{id}</h1>
}

export default Country