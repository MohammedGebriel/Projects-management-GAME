// import { Link } from "react-router-dom";
import {MainTitle} from "../../components/atoms";
import ProjectsFilter from "../../components/templates/Projects/ProjectsFilter";
import { FaThLarge  } from "react-icons/fa";
import SingleProject from "../../components/templates/Projects/SingleProject";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ShowNotification from "../../components/templates/notifications/ShowNotification";
import { Project_TP } from "../../Types";


export default function Projects() {
    //@ts-expect-error
    const {allProject} = useContext(GlobalContext);
    return (
        <div className="page">
            <div className="flex justify-between">
                <div>
                    <MainTitle title="Projects" />
                    <p className="text-brandColor leading-6 text-sm lg:text-lg ">
                        Welcome Jamal Al Sanaferi
                    </p>
                </div>
                <ShowNotification />
            </div>
            <ProjectsFilter />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-textColor">
                    <span className="text-lg"><FaThLarge/></span>
                    <p className="text-sm">Projects</p>
                </div>
                {/* <Link to='' className="text-[#478FB4] text-[12px] font-semibold underline">Details</Link> */}
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    allProject.map((project:Project_TP) => 
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
