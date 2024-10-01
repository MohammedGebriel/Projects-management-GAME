
import { Link } from "react-router-dom";
import { SectionHeader } from "../../components/atoms";
import MainHeader from "../../components/molecules/MainHeader";
import { BsFillPersonFill } from "react-icons/bs";
import ProjectMembers from "../../components/templates/members/ProjectMembers";

export default function Members() {
    return (
        <div className=" flex flex-col gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] lg:mr-[10px]   p-[20px] ">
            <MainHeader />
            <div className="flex flex-col gap-[10px]">
                <SectionHeader icon={<BsFillPersonFill />} header=" Project Members">
                    <Link to='/' className="text-[#478FB4] underline font-semibold text-[12px]">See All</Link>
                </SectionHeader>
                <ProjectMembers />
            </div>
        </div>
    )
}
