import Navbar from '../../components/organisms/Navbar'
import { useParams } from 'react-router-dom'

export default function Phases() {
    const {id} = useParams()
    return (
        <div>
            <Navbar nav_id={id} />
            Phases  Project {id}
        </div>
    )
}
