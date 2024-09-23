import { useParams } from 'react-router-dom'
import Navbar from '../../components/organisms/Navbar'

export default function Services() {
    const {id} = useParams()
    return (
        <div>
            <Navbar nav_id={id} />
            Services  Project {id}
        </div>
    )
}
