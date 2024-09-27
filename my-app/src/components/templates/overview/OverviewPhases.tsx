import { FaThLarge } from "react-icons/fa";
import {ProjectProgress,SectionHeader} from "../../atoms";

export default function OverviewPhases() {
    return (
        <div className="flex flex-col gap-[10px]">
            <SectionHeader header="Project Phases" icon={<FaThLarge />}/>
            <ProjectProgress />
            <div className="table">
                
            </div>
        </div>
    )
}
