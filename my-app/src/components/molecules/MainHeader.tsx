import { useParams } from "react-router-dom";
import { MainTitle, UpdateTime } from "../../components/atoms";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import Navbar from "../organisms/Navbar";

export default function MainHeader() {
    const {id} = useParams()
    const {allProject} = useContext(GlobalContext);
    const [currentProject,setCurrentProject] = useState({})
    const handleFilter = () => {
        const filter = allProject.filter((project) => project.id == id)
        setCurrentProject(filter[0])
    }
    
    useEffect(()=> {
        handleFilter()
    },[])
    

    return (
        <div className="flex flex-col gap-[15px]">
            <div>
                <MainTitle title={currentProject.projectName} />
                <UpdateTime update_time="30 February 2024"  />
            </div>
            <Navbar  className="hidden lg:flex" nav_id={id} />
        </div>
    )
}
