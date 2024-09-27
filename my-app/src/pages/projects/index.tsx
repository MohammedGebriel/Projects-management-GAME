// import { Link } from "react-router-dom";
import {MainTitle} from "../../components/atoms";
import ProjectsFilter from "../../components/templates/Projects/ProjectsFilter";
import { FaThLarge  } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import SingleProject from "../../components/templates/Projects/SingleProject";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ShowNotification from "../../components/templates/notifications/ShowNotification";


export default function Projects() {
    const {allProject} = useContext(GlobalContext);
    return (
        <div className="flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px]">
            <div className="flex justify-between">
                <div>
                    <MainTitle title="Projects" />
                    <p className="text-[#09242E] leading-[24px] text-[13px] lg:text-[18px]">
                        Welcome Jamal Al Sanaferi
                    </p>
                </div>
                <ShowNotification>
                    <div className="text-[20px] relative">
                        <FaBell />
                        <span className="absolute -top-[10px] -right-[10px] bg-[#e02626] w-[20px] h-[20px] rounded-full text-[12px] flex justify-center items-center text-white font-bold ">0</span>
                    </div>
                </ShowNotification>
            </div>
            <ProjectsFilter />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[5px] text-[#91969B]">
                    <span className="text-[18px]"><FaThLarge/></span>
                    <p className="text-[14px]">Projects</p>
                </div>
                {/* <Link to='' className="text-[#478FB4] text-[12px] font-semibold underline">Details</Link> */}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[15px]">
                {
                    allProject.map((project) => 
                        <SingleProject 
                            key= {project.id}
                            id = {project.id}
                            project_name= {project.projectName}
                            project_description= {project.projectDescription}
                            status= {project.status}
                            progress= {project.progress}
                        />
                )
                }
            </div>
        </div>
    )
}
