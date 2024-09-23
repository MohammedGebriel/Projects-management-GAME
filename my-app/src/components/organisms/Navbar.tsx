import { NavLink } from "react-router-dom";
type Navbar_TP = {
    nav_id ?: string 
}
export default function Navbar({nav_id}:Navbar_TP) {
    return (
        <div>
            <NavLink to={`/projects/${nav_id}`}>Overview</NavLink>
            <NavLink to={`/projects/${nav_id}/phases`}>Phases</NavLink>
            <NavLink to={`/projects/${nav_id}/services`}>Services</NavLink>
        </div>
    )
}
