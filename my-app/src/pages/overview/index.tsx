import { useParams } from "react-router-dom";
import Navbar from "../../components/organisms/Navbar";

export default function Overview() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Navbar nav_id={id} />
            Overview Project {id}
        </div>
    )
}
