import { useParams } from "react-router-dom";
import { MainTitle, UpdateTime } from "../../components/atoms";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";
import ShowNotification from "../templates/notifications/ShowNotification";
import NavbarShow from "../templates/navbar/NavbarShow";
import { Project_TP } from '../../Types'

export default function MainHeader() {
    const {id} = useParams()

    const {allProject} = useContext(GlobalContext);
    const [currentProject,setCurrentProject] = useState({})
    const handleFilter = () => {
            
        const filter = allProject.filter((project:Project_TP) => project.id == id)
        setCurrentProject(filter[0])
    }
    
    useEffect(()=> {
        handleFilter()
    },[])
    

    return (
        
        <div className="flex flex-col gap-[15px]">
            <div className="flex items-center justify-between">
                <div>
                    
                    <MainTitle title={currentProject.projectName} />
                    <UpdateTime update_time="30 February 2024"  />
                </div>
                <div className="flex items-center gap-[10px]">
                    <ShowNotification />
                    <NavbarShow />
                </div>
            </div>
            <Navbar  className="hidden lg:flex" nav_id={id} />
        </div>
    )
}
